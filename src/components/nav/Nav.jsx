import {AiOutlineHome} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import './nav.css';
import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);
  return (
    <nav>
      <a href="#home" className={scrollPosition <= 750 ? 'active' : ''} onClick={() => setActiveNav('#home')}><AiOutlineHome /></a>
      <a href="#about" className={scrollPosition <= 1444 && scrollPosition > 750 ? 'active' : ''} onClick={() => setActiveNav('#about')}><BiUser/></a>
      <a href="#experience" className={scrollPosition <= 2034 && scrollPosition > 1444 ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BiBook/></a>
      <a href="#services" className={scrollPosition <= 4446 && scrollPosition >= 2034 ? 'active' : ''} onClick={() => setActiveNav('#services')}><RiServiceLine/></a>
      <a href="#contact" className={scrollPosition > 4446 ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav