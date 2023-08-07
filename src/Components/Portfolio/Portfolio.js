import React from 'react'
import "./Portfolio.css"

function Portfolio() {
  return (
    <div className='portfolio-container'>
      <article className='article-portfolio'>
      <h1 className='portfolio-head'>Logo Portfolio</h1>
      <p className='p-portfolio'>Construction</p>
      <p className='p-portfolio'>Counselling</p>
      <p className='p-portfolio'>Logistics</p>
      <p className='p-portfolio'>Mental Health</p>
      <p className='p-portfolio'>Ranch Farm</p>
      <p className='p-portfolio'>Landscaping</p>
      <p className='p-portfolio'>Cleanig</p>
      <p className='p-portfolio'>Accounting and Finance</p>
      <p className='p-portfolio'>Healthcare</p>
      <p className='p-portfolio'>Ecommerce Business</p>
      </article>
      <section className='section-portfolio'>
        <img className='logo-portfolio' src= '/Asset/logo-portfolio-6.PNG' alt='samples of logo'/>
        <img className='logo-portfolio' src='/Asset/logo-portfolio-5.PNG' alt='samples of logo'/>
        <img className='logo-portfolio' src='/Asset/logo-portfolio-4.PNG' alt='samples of logo'/>
        <img className='logo-portfolio' src='/Asset/logo-portfolio-1.PNG' alt='samples of logo'/>
        <img className='logo-portfolio' src='/Asset/logo-portfolio-2.PNG' alt='samples of logo'/>
        <img className='logo-portfolio' src='/Asset/logo-portfolio-3.PNG' alt='samples of logo'/>
      </section>
    </div>
  )
}

export default Portfolio