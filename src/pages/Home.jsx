import React from "react";
import github from "../assets/icons/github.svg";
import gitlab from "../assets/icons/gitlab.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import dribbble from "../assets/icons/dribbble.svg";
import whitegithub from "../assets/icons/whitegithub.svg";
import whitegitlab from "../assets/icons/whitegitlab.svg";
import whiteinstagram from "../assets/icons/whiteinstagram.svg";
import whitelinkedin from "../assets/icons/whitelinkedin.svg";
import whitedribbble from "../assets/icons/whitedribbble.svg";
import heroImg from "../assets/heroImg.svg";
import smallArrow from "../assets/smallArrow.svg";
import whiteSmallArrow from "../assets/WhiteSmallArrow.svg";
import useTheme from "../context/Theme";
import { Link } from "react-router-dom";

const Home = () => {

  const {thememode} = useTheme();

  return (
    <div className="relative 2xl:px-72 2xl:justify-center xl:px-56 px-4 sm:px-16 flex items-center h-custom mt-24">
      <div className="flex md:flex-row md:justify-between md:items-center flex-col gap-[70px]">
        <div className="xl:w-[500px]">
          <div>
            <div className="animate-bounce ml-[50px] relative bg-[#4831D4] w-[80px] h-[40px] flex justify-center items-center rounded-sm">
              <p className="text-white text-sm">Hi, it's me</p>
              <div className="absolute rotate-180 right-3 bottom-[-10px] w-0 h-0 border-l-[14px] border-r-[14px] border-b-[17px] border-x-transparent border-b-[#4831D4] "></div>
            </div>
            <h1 className="text-[#333] dark:text-white sm:text-7xl leading-tight font-bold mt-2 text-5xl">
              Ronish <br />
              <span className="sm:pl-[100px] pl-[50px]">Katuwal</span>
            </h1>
          </div>
          <p className="text-[#333] dark:text-[#777] md:text-lg mt-7 mb-10 text-lg max-w-[500px]">
            I specialize in building web applications, ensuring a
            seamless user experience.
          </p>
          <Link to="/project" className="flex items-center gap-3 text-lg text-[#333] dark:text-[#777]">
            See All Projects
            {
              thememode === 'light' ? (
                  <img src={smallArrow} alt="smallArrow" srcSet="" />
              ) : (
                  <img src={whiteSmallArrow} alt="smallArrow" srcSet="" />
              )
            }
          </Link>

          <div className="flex gap-5 mt-[70px]">
            {
              thememode === 'light' ? (
                <>
                  <Link to="https://github.com/ronish00" target="_blank"><img src={github} alt="github" /></Link>
                  <Link to="https://www.linkedin.com/in/ronish-katuwal-0a02b7233/" target="_blank"><img src={linkedin} alt="github" /></Link>
                  <Link to="https://dribbble.com/ronishkatuwal" target="_blank"><img src={dribbble} alt="github" /></Link>
                  <Link to="https://www.instagram.com/dnesh_katwal/" target="_blank"><img src={instagram} alt="github" /></Link>
                  <Link to="https://gitlab.com/ronishkatuwal00" target="_blank"><img src={gitlab} alt="github" /></Link>
                </>
              ) : (
                <>
                  <Link to="https://github.com/ronish00" target="_blank"><img src={whitegithub} alt="github" /></Link>
                  <Link to="https://www.linkedin.com/in/ronish-katuwal-0a02b7233/" target="_blank"><img src={whitelinkedin} alt="github" /></Link>
                  <Link to="https://dribbble.com/ronishkatuwal" target="_blank"><img src={whitedribbble} alt="github" /></Link>
                  <Link to="https://www.instagram.com/dnesh_katwal/" target="_blank"><img src={whiteinstagram} alt="github" /></Link>
                  <Link to="https://gitlab.com/ronishkatuwal00" target="_blank"><img src={whitegitlab} alt="github" /></Link>
                </>
              )
            }
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={heroImg} alt="hero" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
