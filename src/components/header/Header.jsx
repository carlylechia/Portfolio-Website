import React from 'react'
import CTA from './CTA'
import ME from '../../assets/chia.jpeg'
import SocialHandles from './SocialHandles'
import './header.css';

const Header = () => {
  return (
   <header>
    <div className="header__container container">
      <h5>Hello, I am</h5>
      <h1>Chia Carlyle</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <SocialHandles /> 
      <div className="me">
        <img src={ME} alt="me" width={400}/>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </div>
   </header>
  )
}

export default Header