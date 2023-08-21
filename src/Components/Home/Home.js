import React from 'react'
import Hero from '../Hero/Hero'
import Portfolio from '../Portfolio/Portfolio'
import Pricing from '../Pricing/Pricing'
import About from '../About/About'
import Review from '../Reviews/Review'
import Contact from '../Contact/Contact'
import Footer from "../Footer/Footer"
import "./Home.css"
import { Routes, Route } from 'react-router-dom'


function Home() {
  return (
    <div className='home'>
      <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Reviews' element={<Review/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Footer' element={<Footer/>}/>
    </Routes>   
    </div>
  )
}

export default Home