import React from 'react'
import { Avatar } from '@material-ui/core';
import './SideNavComp.css';
const SideNavComp = ({title,instructor,id}) => {
    return (
         <>
         <div className="NavComp">
            <h5> Course : {title}</h5 >
            
            <p className="instructor"> by : {instructor}</p>
            </div>         
        </>
    )
}

export default SideNavComp;
