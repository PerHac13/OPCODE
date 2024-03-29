import logo from "../../assets/logo.svg";
import Button from "../../components/Button/Button";
import About from "./about_fest";
import h_logo from "../../assets/Home_logo.svg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    // <div className='sm:px-8 md:px-2 lg:px-[9rem] lg:py-[3rem]'>
    <div className="p-5">
      <div className="flex justify-center items-center">
        <div>
          <div className="px-[1rem] lg:mx-[10rem] md:mx-[6rem] sm:mx-[4rem] lg:w-[30rem] pb-[3rem] overflow-hidden">
            <div className="flex text-[#00FFD1] items-center gap-6 mb-[3rem] pt-[2rem]">
              <div>Contribute</div>
              <div className="bg-[#00FFD1] rounded-full w-2 h-2"></div>
              <div>Collaborate</div>
              <div className="bg-[#00FFD1] rounded-full w-2 h-2"></div>
              <div>Celebrate</div>
            </div>
            <div className="sm:px-2 md:px-2">
              <div>
                <img className="w-[15rem]" src={logo} alt="Logo"></img>
              </div>
              <br></br>
              <p className="text-[#CAD4E0] text-2xl">Open Source Spring Fest'<span className="text-[#00FFD1]">24</span></p>
              <br></br>
              <div></div>
              <p className="text-[#c2ced2]  text-[1.15rem] [text-align:left] py-[1rem]">
                Welcome to our open-source platform, a vibrant hub for
                collaborative development and innovation. Here, passionate
                individuals from diverse backgrounds converge to share,
                contribute, and enhance projects that drive positive change.
                Explore our repository of code, tools, and resources, and join
                us in shaping the future of technology together!
              </p>

              <br></br>
              <div className="flex flex-col items-start gap-4">
                <div className="flex gap-20">
                  <NavLink to="/projects">
                    <Button name={"Dive In"} />
                  </NavLink>
                  <NavLink to="/register">
                    <Button name={"Register"} />
                  </NavLink>
                </div>

                <Button name={"Registered already Join our Discord"} />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <img src={h_logo}></img>
        </div>
      </div>

      <About />
    </div>
  );
};

export default Home;
