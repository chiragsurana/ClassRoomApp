import { Avatar } from '@material-ui/core';
import { Class, Contactless, Delete, FileCopySharp, Folder } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import {deleteIt }from '../StoreReducers/classSlice';
import './ClassComponent.css';
const ClassComponent = ({title,instructor,  id}) => {
   
    const dispatch =useDispatch();
    const deleted=( e)=>{
        e.preventDefault();
        dispatch(deleteIt({
            
            id: id,
        }))
    }
    return (
        <div className="classComponent">
        <img className="classComponent_img" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt =""/>
   
         <div className ="classComponent_middle"> 
         <Avatar className="avatar"/>
         <div className="classComponent_middleText">
        <h3    >{title.length<15 ?title : title.substring(0,15)+ "..."}</h3>
       <p>  by:{instructor}</p> 
         
        </div>
        </div>
        <div className="classComponent_footer" >
         <Class/>
        
         <Folder/>
       
         <button  onClick={deleted} className ="classComponent_delete"><Delete /></button>
         
        </div>
        </div>
    )
}

export default ClassComponent
