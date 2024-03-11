import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
//import Hamicon from '../NavBar/hamburger'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-[2rem]">
      <div className="text-[#00FFD1] flex items-center justify-between">
        <div>
          <img src={logo}></img>
        </div>
        <div className="flex gap-20 items-center [font-size:1rem] [font-weight:400] cursor-pointer">
          <NavLink to='/sponsors'>Sponsors</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <Button name={"Register"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
