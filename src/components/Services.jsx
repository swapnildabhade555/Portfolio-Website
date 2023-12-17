import React, { useState } from 'react'

const Services = () => {

  return (

    <div className="main-container py-5">
      <h1 className="text-4xl font-bold text-center underline mb-10">My Services</h1>
      {/*Main Service Container- Parent */}
      <div className="services-container space-x-5 px-10 flex mt-13 h-80">
        {/*Service1 container */}
          <div className="service1 cursor-pointer hover:bg-gray-300 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i class="text-5xl fa-brands fa-react"></i>
            <h1 className="text-3xl">Web Development in React</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dignissimos iste quisquam repellendus sequi autem error consequatur debitis labore, quos perferendis.
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
          </div>

           {/*Service-2 container */}
          <div className="service2 cursor-pointer hover:bg-gray-300 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-3">
          <i class="text-5xl fa-brands fa-node"></i>
          <h1 className="text-3xl">BackEnd Development In Node-Express </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dignissimos iste quisquam repellendus sequi autem error consequatur debitis labore, quos perferendis.
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
          </div>
           {/*Service-3 container */}
          <div className="service3  cursor-pointer hover:bg-gray-300 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-3">
          <i class="text-5xl fa-brands fa-salesforce"></i>
            <h1 className="text-3xl">SalesForce Administration</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dignissimos iste quisquam repellendus sequi autem error consequatur debitis labore, quos perferendis.
            </p>
          <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
          </div>

      </div>
    </div>
  )
}

export default Services
