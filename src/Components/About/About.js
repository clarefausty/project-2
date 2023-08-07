import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='about-container'>
      <div className='designer-section-1' >
      <img className='designers designers-1'  src='/Asset/graphic-designer-2.jpg' alt='group of graphic designers'/>
        <div className='designer-section-writeup'>
        <h1 className='about-header'>Award wining graphic design agency</h1>
        <p>We are dedicated team of designers, writers, strategists, developers and account specialists who share a common passion for great design. 
            Together, we create extraordinary brand experiences that help companies establish theirvoice and elevate theirbrands.
            Our work is renowned for its highly-crafted design, and its ability to drive action.
          <br></br>
          <br></br> 
            We want to help you grow your traffic, sales and brand's market success. From providing designing & developing services at Creative Design Crew to digital marketing services, we want to help make you grow your business, regarless of where you are now.</p>
        </div>
      </div>
      <div className='designer-section-2'>
        <img className='designers designers-2' src='/Asset/graphic-designer-1.jpg' alt='grapic designer'/>
        <img className='designers designers-3' src='/Asset/graphic-designer-3.jpg' alt='grapic designer'/>
      </div>
    </div>
  )
}

export default About