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
        <nav className="p-4 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                    <img src={logo}></img>
                    </div>

                    {/* Navbar links */}
                    <div className="justify-end gap-12 items-center [font-size:1rem] [font-weight:400] cursor-pointer hidden md:flex">
                        <div className="text-[#00FFD1] mx-4">Projects</div>
                        <div className="text-[#00FFD1] mx-4">Sponsors</div>
                        <div className="text-[#00FFD1] mx-4">About Us</div>
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
                    <div className="block text-[#00FFD1] my-2">Projects</div>
                    <div className="block text-[#00FFD1] my-2">Sponsors</div>
                    <div className="block text-[#00FFD1] my-2">About Us</div>
                    <Button className={'w-[9.7rem]'} name={"Register"}/>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

