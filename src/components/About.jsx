import React, { useState } from 'react'
import bannerImage from '../assets/p12.jpg';

const About = () => {
    const[data,setData]=useState({
        image:bannerImage,
        title:"React Developer and Salesforce Admin",
        desc1:`Hi I am Swapnil, a passionate Web Developer and a Technology Enthusiast. `,
        desc2:`Explore more about my interest and work here.
                You can find my work over here. Thank you for visiting`,
        actionButton:{
            title:"Read More",
            link:"read-more"
        }
    });

  return (
    <div className="main-container bg-gray-100 border py-10">
     <h1 className="text-center underline text-4xl pb-16 font-bold">About Me</h1> 
     <div className="flex items-center">
     {/*image Container*/}

     <div className="w-full flex justify-center">
        <img className="w-80 h-90 rounded-full shadow-xl" src={data.image} alt="Swapnil Dabhade"/>
     </div>
     {/*text Container*/}
     <div className="w-full flex justify-center">
        <div className="space-y-5 w-2/3">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        <p>{data.desc1}</p>
        <p>{data.desc2}</p>
         <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg" >
            {data.actionButton.title}</button>
        </div>
        
     </div>
     </div>
   
    </div>
  )
}

export default About
