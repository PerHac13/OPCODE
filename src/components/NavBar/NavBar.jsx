import logo from '../../assets/logo.svg'
import Button from '../Button/Button'
//import Hamicon from '../NavBar/hamburger'
const Navbar=() =>{
  return (
    <div className='p-[2rem]'>
        <div className='text-[#00FFD1] flex items-center'>
        <div><img src={logo}></img></div>
        <div className='flex gap-20 items-center [font-size:1rem] [font-weight:400] cursor-pointer'>
            <div>Leaderboard</div>
            <div>Sponsors</div>
            <div>Projects</div>
            <div>About Us</div>
            <Button/>
        </div>
            

        </div>
    </div>
  )
}

export default Navbar