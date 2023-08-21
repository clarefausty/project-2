import React from 'react'
import "./Contact.css"


function Contact() {
  
  return (
    <div className='contact-container'>
      <form className='contact-form'>
        <h1 className='contact-head'>Don't be shy.</h1>
        <h2 className='h2-contact'>Talk to us <span className='contact-head' required>.</span></h2>
        <input className='input-contact' type='text' placeholder='Enter your name' required/>
        <input className='input-contact' type='email' placeholder='Enter your email' required/>
        <input className='input-contact' type='text' placeholder='Enter phone number' required/>
        <textarea type='text' placeholder='Enter your project briefly' required/>
        <div className='div-btn'>
          <button  className='submit-contact' >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact