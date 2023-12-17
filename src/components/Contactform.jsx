import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pxamhsj', 'template_4f6a1wd', form.current, 'DSsCY805qTU5aXc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="form-container bg-gray-100">
       <h1 className="text-center text-4xl font-bold mb-5">Contact Me !</h1>
      <div className="flex items-center justify-center">
        <form ref={form} onSubmit={sendEmail}>
          
          <input  className="text-center mt-2 mb-3 rounded-sm w-80"type="text" name="user_name" placeholder="Enter Your Name" /><br/>
          <input className="text-center mt-2 mb-3 rounded-sm w-80" type="email" name="user_email" placeholder="Enter Your Email" /><br/> 
          <textarea className="text-center mt-2 mb-3 rounded-sm w-80 " name="message" placeholder="Enter Your Message" rows={3} cols={20}/><br/>
          <input  className="text-center mt-2 mb-3 w-40 h-10 bg-orange-500 ml-20 text-white font-semibold rounded-sm "type="submit" value="Send" /><br/>
        </form> 
    </div>
    
      
    </div>
  )
}

export default Contactform
