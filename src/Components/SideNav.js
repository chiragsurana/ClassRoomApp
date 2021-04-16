import { ArrowLeft, ArrowRight, MultilineChart } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import './SideNav.css';
const SideNav = ( ) => {
    const [cbut,setCbut] = useState(false);
   
       const handled = () =>{ setCbut(!cbut); }

   
   console.log(cbut);
 
    return (
        <div className={cbut?"sidenav":"sidenotnav"}>
sdfasf  
<div className="arrow" >
 <button onClick={handled} >{cbut ?<ArrowLeft />:<ArrowRight/>}</button>
</div>      
        </div>
    )
}

export default SideNav;
