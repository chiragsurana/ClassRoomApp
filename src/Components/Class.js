import React, { useState } from 'react';
import ClassComponent from './ClassComponent';
import './Class.css';
import { useDispatch, useSelector } from 'react-redux';
import {saveIt, selectItems} from '../StoreReducers/classSlice';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
/*import { ArrowRight } from '@material-ui/icons';*/
import SideNav from './SideNav';
import ListComponent from './ListComponent';
const Class = () => {

    
const [checkValue,setCheckValue]=useState(true);
const [clicked,setClicked] =useState(false);
const [intitle,setIntitle]=useState("");
const [inteacher,setInteacher] =useState(" "); 
 var start ,end ;
const [s1,setS1]=useState("");
const [s2,setS2]=useState("");
const [e1,sete1]=useState("");
const [e2,sete2]=useState("");
const dispatch =useDispatch();
  const items=useSelector(selectItems);

  const clickedddd=(e)=>{
      e.preventDefault();
      setInteacher("");
      setIntitle("");
      setTimeout(  setClicked(false), 5000);
      start =parseFloat(s1.s2);
      end=parseFloat(e1.e2);
      dispatch(saveIt( {
          title:intitle,
          instructor:inteacher,
          id:Date.now(),
          start_time:start,
          end_time:end
      }))

  } 
  
     
  
    return (
        <>
          <BrowserRouter> 
        <div className="class">
            <div className="class_available">
          
            
            {   items.length>0 ?   <h1> You are enrolled in {items.length} classes</h1>:   <h1>You are not enrolled yet !!!!</h1>   }
          
            <button className="class_button" onClick={()=>setClicked(!clicked)} > <span > </span> Click Here to Add a Class  </button>
            
<form className={clicked ?"class_form":"class_formNone"}  >
             <label for="fname">Title : </label>
             <input type="text"  value={intitle} onChange={(e)=>setIntitle(e.target.value)}   placeholder="Enter the Title" required/>
         
             <label for="lname">instructor :</label>
             <input type="text" value={inteacher} onChange={(e)=>setInteacher(e.target.value)}    placeholder="Enter the instructor Name" required/>
             <label>Start Time:</label> <input  value={s1} onChange={(e)=>setS1(e.target.value)}type="number" min="00" max="23"></input><input value={s2} onChange={(e)=>setS2(e.target.value)} type="number"min="00" max="59"step="1" ></input>
             <label>End Time:</label>  <input value={e1} onChange={(e)=>sete1(e.target.value)}type="number" min="00" max="23"></input><input  value={e2} onChange={(e)=>sete2(e.target.value)} type="number" min="00"max="59"step="1"></input>
             <input type="checkbox" onClick={()=>setCheckValue(!checkValue)} ></input>You affirm to make a new class<br></br>
          
             <button onClick={clickedddd} className={checkValue ?"white":"green"} disabled={checkValue}>Click</button>
             </form>
       
         <Switch>
         <Router path="/grid"> <div className="enroled_classes">
            {   items.length>0 &&
                <div className="class_enrolled">
               {items.map(ite =>(  <ClassComponent title={ite.title} instructor={ite.instructor}  id={ite.id} start_time={ite.start_time} end_time={ite.end_time}/>))}
                </div>
            }
            </div>
            </Router> 
            <Router path="/list">
                <div className="enrolled_classes_list">
                    {
                        items.length>0 &&
                        <div className="list_class_enrolled">
                           
         {items.map(ite =>(  <ListComponent title={ite.title} instructor={ite.instructor}  id={ite.id} endTime={ite.end_time} startTime={ite.start_time}  />))}
                 
                            </div>
                    }
                </div>
            </Router>
            </Switch>
           
            </div>
           <SideNav/>
        </div>
        </BrowserRouter>
        </>
    )
};

export default Class;
