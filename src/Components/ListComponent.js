import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button'
import './LIstComponent.css';
import { useDispatch } from 'react-redux';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
 
import IconButton from '@material-ui/core/IconButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import {deleteIt }from '../StoreReducers/classSlice';
import { Class, Contactless, Delete, FileCopySharp, Folder } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
const ListComponent = ({title,instructor,id,endTime,startTime}) => {
    const [open, setOpen] =  useState(false);
    const dispatch =useDispatch();
    const deleted=(e)=>{
        e.preventDefault();
        dispatch(deleteIt({
            
            id: id,
        }))
    }
    var v=`./${title}`;
    return (
        <>
        <Router >
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        ^
      </Button>
      <Collapse in={true}>
        <div id="example-collapse-text">
  <h3>Course: <Link to={v}>{title}</Link></h3>
  
  <h5>By : {instructor} </h5> 
  <div className="items_icons">
     
  
  <Tooltip title="Edit" placement="top">
 <button className="items_icons_edit"><CreateSharpIcon  font-size="xx-small"/> </button>  
  </Tooltip> 
  <Tooltip title="Add" placement="top">
  <button className="items_icons_class">   <Class font-size="xx-small"/>  </button> 
  </Tooltip>
  <Tooltip title="Folder" placement="top">
 <button className="items_icons_folder">    <Folder font-size="xx-small"/>     </button> </Tooltip>
 <Tooltip title="Delete" placement="top">
     <button className="items_icons_delete" onClick={deleted}>   <Delete font-size="xx-small"/>   </button></Tooltip>
       </div>

        </div>
      </Collapse>
      </Router>
      <div className={open?"class_show":"class_notShow"} >

        <div className="description">
 
        </div>
        <div className="learn_things">

        </div>
      </div>
      </>
    )
}

export default ListComponent;

