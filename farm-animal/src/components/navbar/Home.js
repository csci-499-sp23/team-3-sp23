import React from 'react'
import HomeBg from "./HomeBg";
import "../../styles/navbar_/HomeBg.css";
import "../../styles/navbar_/Home.css"
import { Link } from "react-router-dom"

const Home = () => {
  // const authToken = sessionStorage.getItem('Token')
  // if(authToken)
  //   <Link to = "../gameplay/Welcome"/>
  return (
    <div className='home-container'>
      <HomeBg />
      <div className='play-btn'>
        <Link to = "/user-profile" className='welcome'>
          <button type="button" className='wel-button'>
            Play
          </button> 
        </Link>
      </div>
    </div>
  )
}

export default Home