import logo from '../../assets/logo.svg'
import Button from '../../components/Button/Button'
import About from './about_fest';
const Home = () => {
  return (
    <div className='sm:p-[8rem] '>
      {/* <div className=''/> */}
                <div className='px-[1rem] lg:mx-[10rem] md:mx-[6rem] sm:mx-[4rem]  lg:w-[30rem] pb-[3rem]'>   
                    <div className="flex text-[#00FFD1]  items-center gap-6 mb-[3rem] pt-[2rem]">
  
                          <div>Contribute</div>
                          <div className="bg-[#00FFD1]  [border-radius:100%] w-2 h-2" ></div>
                          <div>Collaborate</div>
                          <div className="bg-[#00FFD1] w-2 h-2 [border-radius:100%]" ></div>
                          <div>Celebrate</div>
                    </div>
      <div className='sm:px-2 md:px-2'>
          <div><img  className='w-[15rem] ' src={logo}></img></div>
          <br></br>
          <p className='text-[#CAD4E0] [font-size:2rem]'>Open Source Spring Fest</p>
          <br></br>
          <p className='text-[#64748A] [text-align:center]'>The old bookstore stood at the corner of Maple Street, its weathered facade a testament to the passage of time. Inside, shelves lined with dusty tomes stretched from floor to ceiling, each book whispering stories of distant lands and forgotten adventures.</p>
          <br></br>
          <div className='flex gap-5 '>
              <Button name={"Dive In"}/>
              <Button name={"Register"}/>
          </div>
      </div>

    </div>
   <About/>

      
      
  </div>
  )
};

export default Home;
