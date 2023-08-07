import React from 'react'
import Hero from '../Hero/Hero'
import Portfolio from '../Portfolio/Portfolio'
import Pricing from '../Pricing/Pricing'
import About from '../About/About'
import Review from '../Reviews/Review'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <div>
        <Hero/>
        <Portfolio/>
        <Pricing/>
        <About/>
        <Review/>
        <Contact/>
        <footer/>
    </div>
  )
}

export default Home