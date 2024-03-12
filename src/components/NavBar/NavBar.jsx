import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
//import Hamicon from '../NavBar/hamburger'
// import { useState } from "react";
// import { NavLink } from "react-router-dom";


// const [open,Isopen]=useState(false);
// const toggle=()=>{
//   Isopen(!open)
// }


const Navbar = () => {
  return (
    <div className="p-[2rem]">
      <div className="text-[#00FFD1] flex items-center justify-between md:flex">
        <div>
          <img src={logo}></img>
        </div>
        <div className="flex justify-end gap-12 items-center [font-size:1rem] [font-weight:400] cursor-pointer">
            <div>Sponsors</div> 
            <div>Sponsors</div> 
            <div>Sponsors</div> 
            <Button name={"Register"}/>
        </div>
      </div>
    </div>
  );


  
};



export default Navbar;



