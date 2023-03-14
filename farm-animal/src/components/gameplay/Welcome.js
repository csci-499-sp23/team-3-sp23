import React from 'react'
import { Link } from 'react-router-dom'
function Welcome() {
  const authToken = sessionStorage.getItem('Token')
  if(!authToken)
    <Link to = "../navbar/Login"/>
  return (
    <div className='message'>Welcome to the game LADILADIDAH</div>
  )
}

export default Welcome