import { ArrowLeft, ArrowRight  } from "@material-ui/icons";
import React, {    useState } from "react";
import { useSelector } from "react-redux";
import {selectItems} from '../StoreReducers/classSlice';

import "./SideNav.css";
import SideNavComp from "./SideNavComp";
const SideNav = () => {
  const [cbut, setCbut] = useState(false);

  const handled = () => {
    setCbut(!cbut);
  };
const items=useSelector(selectItems);
  console.log(cbut);

  return (
    <div className={cbut ? "sidenav" : "sidenotnav"}>
      <p className="">Your Enrolled Courses</p>
      <div className="arrow">
        
        <button onClick={handled} className={cbut?"left":"right"}>
          {cbut ? <ArrowLeft /> : <ArrowRight />}
        </button>
        
<div className={cbut?"sideNavComp":"sidenotNavComp"}>
      
        {
          items.map(ite =>(
          <div> 
          <SideNavComp title={ite.title} intsructor={ite.instructor} id={ite.id}/>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};
 
export default SideNav;
