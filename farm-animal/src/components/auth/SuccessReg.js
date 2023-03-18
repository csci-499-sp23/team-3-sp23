import React from 'react'
import { Link } from 'react-router-dom';

export default function SuccessReg() {
  return (
    <div>
        <div>You're all set! Login in to get started on your adventure!</div>

        <Link to="/Login" className='login-link'>Login</Link>
    </div>
  )
}
