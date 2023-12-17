import React, { useState } from 'react'

const Header = () => {
    const [brandName,setBrandName]=useState("Swapnil Dabhade");
    const [menuLinks,setMenuLinks]=useState([
        {
            title:"Home",
            link:"/home",
            id:1,
        },
        {
            title:"About",
            link:"/about",
            id:2
        },
        {
            title:"Skills",
            link:"/skills",
            id:3
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id:4
        },
        {
            title:"Contact",
            link:"/contact",
            id:5

        }
    ]);
    const[actionButton,setActionButton]=useState({
        title:"Download Resume",
    });
    
  return (
    <div className='h-16 border main flex justify-around items-center px-16 bg-gray-100'>
      <div>{/*Brand Logo */}
      <h1 className="text-2xl font-bold ">{brandName}</h1>
      </div>
      <div className="space-x-5">{/*Menu Links */}
        {menuLinks.map((link)=>(
            <a className="hover:text-orange-600" key={link.id} href={link.link}>{link.title}</a>
        ))}
        {/* <a href="/home" className="hover:text-orange-600">Home</a>
        <a href="/about"className="hover:text-orange-600">About</a>
        <a href="/skils" className="hover:text-orange-600">Skills</a>
        <a href="/portfolio"className="hover:text-orange-600">Portfolio</a>
        <a href="/contact"className="hover:text-orange-600">Contact</a> */}
      </div>
      <div>{/*Buttons */}
        <button href={actionButton.link} className="px-3 py-2 bg-orange-500 rounded-full shadow text-white text-1xl">{actionButton.title}</button>
      </div>
    </div>
  )
}

export default Header
