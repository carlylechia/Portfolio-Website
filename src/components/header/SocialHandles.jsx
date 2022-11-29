import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {FaAngellist} from 'react-icons/fa';

const SocialHandles = () => {
  return (
    <div className="social__handles">
      <a href="https://www.linkedin.com/in/chia-carlyle/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://angel.co/jobs/home" target="_blank" rel="noreferrer"><FaAngellist /></a>
      <a href="https://github.com/carlylechia" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
    </div>
  )
}

export default SocialHandles
