import React from "react";
import CV from "../assets/resume.png";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="2xl:px-72 xl:px-56 px-4 sm:px-16 mx-auto">
      <div className="heading my-10">
        <h1 className="text-[#333] dark:text-white text-4xl sm:text-5xl leading-tight font-bold mt-2">
          Resume.
        </h1>
        <p className="text-[#777] mt-4">
          Convinced to hire me?{" "}
          <a href={CV} className="text-[#4831D4] dark:text-[#7f6cff]" download="CV">
            Download CV
          </a>
        </p>
      </div>
      <div className="bg-slate-200 px-5 md:w-[500px] lg:w-[600px] xl:w-[700px] mx-auto">
        <img src={CV} className="w-full h-full mb-10" alt="resume" srcSet="" />
      </div>
    </div>
  );
};

export default Resume;
