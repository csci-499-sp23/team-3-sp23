import React from 'react'
import animals from '../assets/Register-background.gif'
import '../styles/HomeBg.css';

const RegBg = () => {
  return (
    <div className='reg-bg'>
        <img src={animals} className="reg-logo" alt="logo" width="95%" height="95%" />
    </div>
  )
}

export default RegBg