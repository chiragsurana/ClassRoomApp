import React, { useState } from 'react';
import ClassComponent from './ClassComponent';
import './Class.css';
import { useDispatch, useSelector } from 'react-redux';
import {saveIt, selectItems} from '../StoreReducers/classSlice';
import { ArrowRight } from '@material-ui/icons';
import SideNav from './SideNav';
const Class = () => {

    
const [checkValue,setCheckValue]=useState(true);
const [clicked,setClicked] =useState(false);
const [intitle,setIntitle]=useState("");
const [inteacher,setInteacher] =useState(" "); 

const dispatch =useDispatch();
  const items=useSelector(selectItems);

  const clickedddd=(e)=>{
      e.preventDefault();
      setInteacher("");
      setIntitle("");
      setTimeout(  setClicked(false), 5000);
      
      dispatch(saveIt( {
          title:intitle,
          instructor:inteacher,
          id:Date.now(),
      }))

  } 
  
     
  
    return (
        <div className="class">
            <div className="class_available">
           
            
            {   items.length>0 ?   <h1> You are enrolled in the classes</h1>:   <h1>You are not enrolled yet !!!!</h1>   }
          
            <button className="class_button" onClick={()=>setClicked(!clicked)} > <span > </span> Click Here to Add a Class  </button>
            
<form className={clicked ?"class_form":"class_formNone"}  >
             <label for="fname">Title : </label>
             <input type="text"  value={intitle} onChange={(e)=>setIntitle(e.target.value)}   placeholder="Enter the Title" required/>
         
             <label for="lname">instructor :</label>
             <input type="text" value={inteacher} onChange={(e)=>setInteacher(e.target.value)}    placeholder="Enter the instructor Name" required/>
         
             <input type="checkbox" onClick={()=>setCheckValue(!checkValue)} ></input>You affirm to make a new class<br></br>
          
             <button onClick={clickedddd} className={checkValue ?"white":"green"} disabled={checkValue}>Click</button>
             

         </form>
           
            {   items.length>0 &&
                <div className="class_enrolled">
               {items.map(ite =>(  <ClassComponent title={ite.title} instructor={ite.instructor}  id={ite.id}/>))}
                </div>
            }
           
           
            </div>
        </div>
    )
}

export default Class
