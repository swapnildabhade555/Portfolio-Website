import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";
import bannerImage from '../assets/p11.jpg';
import bannerBackground from '../assets/banner_wallpaper.svg';

const Banner = () => {
  const el=useRef(null);
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ["React Developer", "MERN Stack Dev", "Salesforce Admin"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };

  },[])
  return (
    <div className="main-container flex items-center h-100" style={
        {
            backgroundImage:`url(${bannerBackground})`,
            backgroundSize:"100%",
            backgroundRepeat:"no-repeat"
        }
      }>
    {/*first-container */}
        
      <div className=" w-full flex justify-center ml-10 text-white">
        {/*text*/}
      <div className="mt-6 w-2/3 ms-10">
      <h3 className=" text-3xl font-semibold">Hi, I am</h3>
        <h1 className="mt-3 text-5xl font-bold">Swapnil Dabhade</h1>
        <h2 className="mt-2 text-3xl font-bold">I am a <span ref={el}></span></h2>
        <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Pariatur, eius distinctio alias exercitationem soluta possimus libero sapiente qui amet
             magnam!Pariatur, eius distinctio alias exercitationem soluta possimus libero sapiente qui 
             amet magnam!
        </p>
        <br/>
        <div className="icons-container flex space-x-4">
          <a className="border hover:bg-white-500 w-11 h-10 bg-gray-900 cursor-pointer rounded-full flex justify-center">
            <i class="fa-brands text-center text-3xl  fa-facebook"></i>
            </a>
            <a className="border hover:bg-white-500 w-11 h-10 bg-gray-900 cursor-pointer rounded-full flex justify-center">
            <i class="fa-brands text-center text-3xl fa-instagram"></i>
            </a>
            <a className="border hover:bg-white-500 w-11 h-10 bg-gray-900 cursor-pointer rounded-full flex justify-center">
            <i class="fa-brands text-center text-3xl fa-linkedin"></i>
            </a>
            <a className="border hover:bg-white-500 w-11 h-10 bg-gray-900 cursor-pointer rounded-full flex justify-center">
            <i class="fa-brands text-center text-3xl fa-github"></i>
            </a>
        </div>
        <a className="mt-6 flex mb-2 px-3 py-2 bg-orange-500 rounded-full shadow-lg w-28" href="/contact">Contact Me</a>
      </div>
      
      
      </div>
      {/*second-container */}
      <div className="w-full flex justify-center">{/*image*/}

            <img className="shadow w-90 h-80 rounded-full" src={bannerImage} alt="BannerImage" />
      </div>
    </div>
  )
}

export default Banner
