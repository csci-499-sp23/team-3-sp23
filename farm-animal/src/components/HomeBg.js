import React from 'react'
import logo from '../assets/HomeImage.gif'
import '../styles/HomeBg.css';

const HomeBg = () => {
  return (
    <div className='home-bg'>
        <img src={logo} className="home-logo" alt="logo" width="95%" height="95%" />
    </div>
  )
}

export default HomeBg