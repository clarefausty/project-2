
import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div>
                <nav className='nav-bar'>
                    <div className='logo-section'>
                    <img src='/Asset/favicon-32x32.png' alt='logo'/ >
                    <p>Creative</p>
                    </div>
                    <ul className='nav-hero-ul'>
                    <li>Services</li>
                    <li>Our Portfolio</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>Reviews</li>
                    <li>Contact Us</li>
                    </ul>
                    <div className='communication-section'>
                    <span className='chat-section'>+23408169569392</span>
                    <span className='chat-section'>Live Chat</span>
                    </div>
                </nav>
    </div>
  )
}

export default Nav

