import React from 'react'
import "./Pricing.css"

function Sections(props) {
  return (
    
        <div className='pricing-type-container'>
        <h1>{props.title}</h1>
        <img src= {`/Asset/${props.img}`} alt='price type'/>
        <p>{props.originalType}</p>
        <p>{props.dedicatedType}</p>
        <p>{props.revision}</p>
        <p>{props.description}</p>
        <p>{props.signatureDesign}</p>
        <p>{props.format}</p>
        </div>
    
  )
}

export default Sections