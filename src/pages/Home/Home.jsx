import logo from '../../assets/logo.svg'
import Button from '../../components/Button/Button'
const Home = () => {
  return <div className=' px-[1rem] lg:mx-[10rem] md:mx-[6rem] sm:mx-[4rem]  lg:w-[30rem]'>   
      <div className="flex text-[#00FFD1]  items-center gap-6 mb-[3rem] ">
        <div>Contribute</div>
        <div className="bg-[#00FFD1] lg:w-[0.5rem] lg:h-[0.5rem] [border-radius:100%] md:w-[0.5rem] md:h-[0.5rem]" ></div>
        <div>Collaborate</div>
        <div className="bg-[#00FFD1] w-[0.5rem] h-[0.5rem] [border-radius:100%]" ></div>
        <div>Celebrate</div>
      </div>
      <div><img src={logo}></img></div>
      <br></br>
      <p className='text-[#CAD4E0] [font-size:2rem]'>Open Source Spring Fest</p>
      <br></br>
      <p className='text-[#64748A] [text-align:center]'>The old bookstore stood at the corner of Maple Street, its weathered facade a testament to the passage of time. Inside, shelves lined with dusty tomes stretched from floor to ceiling, each book whispering stories of distant lands and forgotten adventures.</p>
      <br></br>
      <div className='flex gap-5'>
          <Button name={"Dive In"}/>
          <Button name={"Register"}/>
      </div>
  </div>;
};

export default Home;
