import React from 'react'
import bannerBackground from '../assets/banner_wallpaper.svg';

const Expertise = () => {
  return (
    <div className="my-14">
      <h1 className="text-3xl font-bold underline text-center mb-16">My Expertise</h1>
      {/*box Expertise */}
      <div style={
        {
            backgroundImage:`url(${bannerBackground})`,
            backgroundSize:"100%",
            backgroundRepeat:"no-repeat"
        }
      } className="box-container flex py-15">

        <div className="text-container flex text-white justify-center mb-5">
            {/* text-container */}
            <div className="w-2/3 text-center space-y-4">
                <h1 className="text-4xl font-bold mt-5">I Love These Technologies</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Reprehenderit dignissimos accusamus quo, totam ipsum velit dolorem voluptatibus ipsam quas fugit.

                </p>
                <button className="px-4 py-2 bg-orange-500 rounded-full shadow-lg mb-20">Hire Me</button>
            </div>
            
        </div>
        <div className="skills-container flex justify-center ml-20">
            <div className="flex w-2/3 h-fit space-x-3 justify-center flex-wrap">
                <p className="bg-gray-300  w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">Java</p>
                <p className="bg-gray-300  w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">Java</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">HTML5</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">CSS3</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">JavaScript</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">Bootstrap</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">Node.js</p>
                <p className="bg-gray-300 w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">Firebase</p>
                <p className="bg-gray-300 w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">Express.js</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">Ejs</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">MongoDb</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">Postman API</p>
                <p className="bg-gray-300 w-fit px-3 mt-4  py-1 rounded-full hover:bg-orange-500 cursor-pointer">ReactJs</p>
                <p className="bg-gray-300 w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">MySql</p>
                <p className="bg-gray-300 w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">Salesforce.com</p>
                <p className="bg-gray-300 w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">Apex Triggers</p>
                <p className="bg-gray-300 w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">Salesforce Admin</p>
                <p className="bg-gray-300 w-fit px-3 mt-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer">Salesforce Developer</p>

            </div>
         

        </div>

      </div>


    </div>
  )
}

export default Expertise
