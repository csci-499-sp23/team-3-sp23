import React from 'react'
import logo from '../assets/HomeImage.gif'
import '../styles/Background.css';

const Background = () => {
  return (
    <div className='background'>
        <img src={logo} className="App-logo" alt="logo" width="95%" height="95%" />
    </div>
  )
}

export default Background