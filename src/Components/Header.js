 
import { Add, FormatListBulleted } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Header.css';
import SideNav from './SideNav';

const Header = () => {
   
 
    return (
        <div className="header">
       <SideNav />
        <div className="header-left">
        <FormatListBulleted className="logo"  />
       
        <p  >Classroom</p>
         
        </div>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyfz8rc8RR3GpTkBhfDxFBGwwsvnSCZM0ww&usqp=CAU"
        alt=""/>
        
   
        </div>
        
        
    )
}

export default Header
