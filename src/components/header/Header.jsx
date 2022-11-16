import React from 'react'
import CTA from './CTA'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello, I am</h5>
      <h1>Chia Carlyle</h1>
      <h5 className="text-light">Fullstack Developer</h5>
    </div>
    <CTA />
   </header>
  )
}

export default Header