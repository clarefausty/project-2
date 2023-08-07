import React from 'react'
import Nav from './Nav/Nav'
import "./Hero.css"
import {BsChat} from "react-icons/bs"
import {FaUser} from "react-icons/fa"



function Hero() {
  return (
    <div className='hero-section'>
      <Nav/>
      <article className='article-hero'>
      <div className='section-1'>
        <h2>Get Your <span className='custom'>Custom</span> </h2>
        <h2 className='line'>___ <span className='custom green'>Logo Designs</span> In</h2>
        <h4 className='advert'>Design custom logos for your brand to give it a premium look!</h4>
        <h4 >Fill the Form To <span className='green'>Avail 70% off</span></h4>
        <div className='input-section'>
          <input type='text' placeholder='Enter Your Name'/>
          <p className='start'>Start Project</p>
        </div>
      </div>
      <div className='universal-price'>$50 </div>
      <div className='logo-sample-section'>
        <img className='logo-sample-1 sample' src='/Asset/sample-1.PNG' alt='logo sample'/>
        <img className='logo-sample-2 sample' src='/Asset/sample-2.PNG' alt='logo sample'/>
        <img className='logo-sample-3 sample' src='/Asset/sample-3.PNG' alt='logo sample'/>
        <img className='logo-sample-4 sample' src='/Asset/sample-4.PNG' alt='logo sample'/>
      </div>
      <div className='user-icon-container'><FaUser /></div>
      <div className='chat-icon-container'><BsChat/>Chat</div>
      </article>
    </div>
  )
}

export default Hero