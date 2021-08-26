import { Avatar } from '@material-ui/core';
import { Class, Contactless, Delete, FileCopySharp, Folder } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import {deleteIt }from '../StoreReducers/classSlice';
import './ClassComponent.css';
const ClassComponent = ({title,instructor,  id,start_time,end_time}) => {
   
    const dispatch =useDispatch();
    const deleted=( e)=>{
        alert("Are you sure you want  to delete it");
        e.preventDefault();
        dispatch(deleteIt({
            
            id: id,
        }))
    }
    return (
        <div className="classComponent">
        <img className="classComponent_img" src="https://images.unsplash.com/photo-1505682499293-233fb141754c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" alt =""/>
   
         <div className ="classComponent_middle"> 
         <Avatar className="avatar"/>
         <div className="classComponent_middleText">
        <h3    >{title.length<15 ?title : title.substring(0,12)+ "..."}</h3>
       <p>  by:{instructor}</p> 
         <p>{start_time} - {end_time}</p>
        </div>
        </div>
        <div className="clt_footer" >
         <Class />
        
         <Folder/>
        

         <Delete    onClick={deleted} /> 
         
   
 
 
        </div>
        </div>
    )
}

export default ClassComponent
