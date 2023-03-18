import React from 'react'
import logo from '../../assets/HomeImage.gif'
import '../../styles/navbar_/HomeBg.css';

const HomeBg = () => {
  const logo = require('../../assets/HomeImage.gif');
  return (
    <div className='home-bg'>
        <img src={logo} className="home-logo" 
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "65%",
          height: "85%"
        }}/>
    </div>
  )
}

export default HomeBg