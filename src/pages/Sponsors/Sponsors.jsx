import dev from '../../assets/sponsors/devfolio.png'
import file from '../../assets/sponsors/Filecoin.png'
import poly from '../../assets/sponsors/Polygon.png'
import replit from '../../assets/sponsors/replit.png'
import solana from '../../assets/sponsors/Solana.png' 
const Sponsors = () => {
  return (
    <div className=" text-[#CAD4E0] font-normal [font-style:inter]  mx-[9rem] pt-10">
        <div  className="flex flex-row gap-4 items-center">
                <div className="bg-[#00FFD1] w-[0.75rem] h-[0.75rem] [border-radius:100%]" ></div>
                <div className=" [font-size:28px]">Sponsors</div>
        </div>
      <div className=" mt-4 flex justify-center ">
              <p  className='[text-align:justify]'>Join us for an exhilarating open source experience powered by our esteemed sponsors. With their generous support, we're fostering innovation and collaboration in the tech community. Let's create something extraordinary together. A big thank you to all our sponsors for making this event possible!</p>
      </div>
      <br></br>
      <p className="text-[#6B7280] mt-4 flex justify-center">Kindly visit our sponsors page</p>
      <br></br>
      <div className='sm:items-center  py-20 flex flex-col items-center cursor-pointer gap-5' >
        <p className='text-3xl [texrt-align:center]'>Gold Sponsors</p>
        <p><a className='' href="https://devfolio.co/discover"><img src={dev}></img></a></p> 
        <p><a href="https://polygon.technology/"><img src={poly}></img></a></p>
        <p className='text-3xl [text-align:center]'>Silver Sponsors</p>
        <p><a href="https://filecoin.io/"><img src={file}></img></a></p>
        <p><a className='w-[40rem]' href="https://replit.com/"><img src={replit}></img></a></p>
        <p><a href="https://solana.com/"><img src={solana}></img></a></p>
      </div>

    </div>

  );
};

export default Sponsors;
