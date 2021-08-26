 
import { Add, FormatListBulleted } from '@material-ui/icons'
import React, { useEffect, useState } from 'react';
import './Header.css';
import SideNav from './SideNav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 const Header = () => {
   
 
    return (
        <>
        <Router>
        <div className="header">
       <SideNav />
        <div className="header-left">
        <FormatListBulleted className="logo"  />
       
       <Link to="/class"> <p  className="p" >Classroom </p></Link>
       <p>                     </p>
       <Link to="/grid"><p className="p">Grid View</p></Link>
       <p>                                                             </p>
          <Link to="/list"> <p className="p">List View</p></Link> 
        </div>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyfz8rc8RR3GpTkBhfDxFBGwwsvnSCZM0ww&usqp=CAU"
        alt=""/>
        
   
        </div>
        </Router>
        </>
        
    )
}

export default Header
