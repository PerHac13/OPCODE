import logo1 from '../../assets/devfolio.svg'
import logo2 from '../../assets/discord.svg'
const Sponsors = () => {
  return (
    <div className=" text-[#CAD4E0] font-normal [font-style:inter]  mx-[9rem] pt-10">
        <div  className="flex flex-row gap-4 items-center">
                <div className="bg-[#00FFD1] w-[0.75rem] h-[0.75rem] [border-radius:100%]" ></div>
                <div className=" [font-size:28px]">Sponsors</div>
        </div>
      <div className=" mt-4 flex justify-center ">
              <p  className='[text-align:justify]'>Join us for an exhilarating hackathon experience powered by our esteemed sponsors. With their generous support, we're fostering innovation and collaboration in the tech community. Let's create something extraordinary together. A big thank you to all our sponsors for making this event possible!</p>
      </div>
      <br></br>
      <p className="text-[#6B7280] mt-4 flex justify-center">Kindly visit our sponsors page</p>
      <br></br>
      <div className='flex gap-[15rem] items-center cursor-pointer justify-evenly'>
        <p className='w-40 '><a href="https://devfolio.co/discover"><img src={logo1}></img></a></p>
        <p><a href="https://discord.com/"><img src={logo2}></img></a></p>
      </div>

    </div>

  );
};

export default Sponsors;
