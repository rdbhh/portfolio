import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-full flex items-center p-6 h-screen  bg-slate-950">
      <div className="w-1/2 text-white">
        <span className="font-bold   ">
          <h2 className=" ml-12 text-6xl">Hi, I'm Reda </h2> <br />
          <p className="ml-12 text-4xl ">
            A fullstack devlopper. <br /> I'm always trying to bring real ideas/value and 
           define problems with my codes.
          </p><br /><br />
        </span>
      </div>
      <div className=" text-white  ">
        <span>
          <img src="portfolio" alt="errror" className="ml-20"/>
        </span>
      </div>
    </div>
  );
};
export default Home;
