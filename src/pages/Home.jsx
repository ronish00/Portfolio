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
import useTheme from "../context/Theme";

const Hero = () => {

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
          <p className="text-[#333] dark:text-[#777] md:text-lg mt-7 text-lg max-w-[500px]">
            I specialize in building web applications, ensuring a
            seamless user experience.
          </p>
          <div className="flex gap-5 mt-[70px]">
            {
              thememode === 'light' ? (
                <>
                  <img src={github} alt="github" />
                  <img src={gitlab} alt="gitlab" />
                  <img src={instagram} alt="instagram" />
                  <img src={linkedin} alt="linkedin" />
                  <img src={dribbble} alt="dribbble" />
                </>
              ) : (
                <>
                  <img src={whitegithub} alt="whitegithub" />
                  <img src={whitegitlab} alt="whitegitlab" />
                  <img src={whiteinstagram} alt="whiteinstagram" />
                  <img src={whitelinkedin} alt="whitelinkedin" />
                  <img src={whitedribbble} alt="whitedribbble" />
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

export default Hero;
