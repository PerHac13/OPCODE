import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
// //import Hamicon from '../NavBar/hamburger'
// // import { useState } from "react";
// // import { NavLink } from "react-router-dom";


// // const [open,Isopen]=useState(false);
// // const toggle=()=>{
// //   Isopen(!open)
// // }


// const Navbar = () => {
//   return (
//     <div className="p-[2rem]">
//       <div className="text-[#00FFD1] flex items-center justify-between md:flex">
//         <div>
//           <img src={logo}></img>
//         </div>
//         <div className="flex justify-end gap-12 items-center [font-size:1rem] [font-weight:400] cursor-pointer">
//             <div>Sponsors</div> 
//             <div>Sponsors</div> 
//             <div>Sponsors</div> 
//             <Button name={"Register"}/>
//         </div>
//       </div>
//     </div>
//   );


  
// };



// export default Navbar;


import  { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-4 overflow-hidden fixed w-full top-0 left-0 z-[1000] bg-bground">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                    <img src={logo}></img>
                    </div>

                    {/* Navbar links */}
                    <div className="justify-end gap-12 items-center [font-size:1rem] [font-weight:400] cursor-pointer hidden md:flex">
                        <NavLink to='/' className="text-[#00FFD1] mx-4  capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">Home</NavLink>
                        <NavLink to='/projects' className="text-[#00FFD1] mx-4  capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">Projects</NavLink>
                        <NavLink to='/sponsors' className="text-[#00FFD1] mx-4  capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">Sponsors</NavLink>
                        <NavLink to='/aboutus' className="text-[#00FFD1] mx-4  capitalize relative cursor-pointer transition-all  duration-500 before:content-['']  before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5  before:rounded-full  before:opacity-0  before:transition-all  before:duration-500 before:bg-[#00FFD1] hover:before:w-full hover:before:opacity-100">About Us</NavLink>
                        <Button name={"Register"}/>
                    </div>

                    {/* Hamburger menu (mobile) */}
                    <div className="md:hidden">
                        <button onClick={() =>  setIsOpen(!isOpen)} className="text-[#00FFD1] focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu (hidden by default) */}
            {isOpen && (
                <div className="md:hidden p-4 cursor-pointer">
                    <NavLink to='/'className="block text-[#00FFD1] my-2">Home</NavLink>
                    <NavLink to='/projects' className="block text-[#00FFD1] my-2">Projects</NavLink>
                    <NavLink to='/sponsors' className="block text-[#00FFD1] my-2">Sponsors</NavLink>
                    <NavLink to='/aboutus' className="block text-[#00FFD1] my-2">About Us</NavLink>
                    <Button className={'w-[9.7rem]'} name={"Register"}/>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

