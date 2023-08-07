import React from 'react'
import "./Pricing.css"
import Sections from './Sections'
import NavPricing from './NavPricing/NavPricing'
import data from './data'

function Pricing() {
  const pricingSection = data.map(function(segment){
    return <  
    Sections
    {...segment}
      />
  })
  
  return (
    <div>
      
      <h1 className='pricing-headline'>What we charge</h1>
     
      <NavPricing/>
      <div className='price-section'>
      {pricingSection}
      </div>
    </div>
  )
}

export default Pricing