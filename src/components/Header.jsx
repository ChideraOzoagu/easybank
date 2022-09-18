import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import gsap from 'gsap';

import logo from '../assets/images/logo.svg';


const Header = () => {
    const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(window.pageYOffset)
  
    const checkScroll = ()=>{
      setScroll(window.pageYOffset)
     
    }

    useEffect(()=>{
      window.addEventListener('scroll', checkScroll)
      if(scroll > 400){
        setShowNav(false)
      }
      return ()=>{
        window.removeEventListener('scroll', checkScroll) 
      }
    })

  return (
    <div>
       <nav id='home' >
        <div className="nav-header">
        <img src={logo} alt="easybank" className='logo'/>
        <button className='nav-btn' onClick={()=>setShowNav(!showNav)}>
          {showNav? <FaTimes className='nav-close'/> :<FaBars  className='nav-open'/> }
        </button>
        </div>
        <div className={showNav? "nav-container show-nav": 'nav-container'}>
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#blog">blog</a></li>
            <li><a href="">careers</a></li>
          </ul>
        </div>
        <button className='btn-desktop'>Request Invite</button>
      </nav>
    </div>
  )
}

export default Header
