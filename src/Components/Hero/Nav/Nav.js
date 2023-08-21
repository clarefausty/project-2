
import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    
                <nav className='nav-bar'>
                    <div className='logo-section'>
                    <img src='/Asset/favicon-32x32.png' alt='A beauty'/ >
                    <p>Creative</p>
                    </div>
                    <ul className='nav-hero-ul'>
                    <li><Link className='link' to="/"> Services</Link> </li>
                    <li><Link className='link' to="/Portfolio"> Our Portfolio</Link> </li>
                    <li><Link className='link' to="/Pricing"> Pricing</Link> </li>
                    <li><Link className='link' to="/About"> About Us</Link> </li>
                    <li><Link className='link' to="/Reviews"> Reviews</Link> </li>
                    <li><Link className='link' to="/Contact"> Contact Us</Link> </li>
                    </ul>
                    <div className='communication-section'>
                    <span className='chat-section'>+23408169569392</span>
                    <span className='chat-section'>Live Chat</span>
                    </div>
                </nav>
    
  )
}

export default Nav

