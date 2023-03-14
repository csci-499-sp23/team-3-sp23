import React from 'react'
import "../../styles/navbar_/info_/forgot.css"





function ForgotP() {
  const handleSubmit = () => {
    console.log("Forgot password");
  }

  return (
    <div className='forgot-container'>
      <form className='forgot-form' onSubmit={handleSubmit}>
        <h2 className="forgot-header">Forgot Password</h2>
        <label htmlFor="email" className='forgot-label'>Email: </label>
        <input className="forgot-input" type="email" placeholder='Players Email' id="email" />
        <label htmlFor="username" className='forgot-label'> Username:</label>
        <input className="forgot-input" type="password" placeholder='Players Username' id="username" name="username" />

        <button type="submit" className="login-button">Reset Password</button>

      </form>
    </div>
  )
}

function ForgotU() {

  const handleSubmit = () => {
    console.log("forgot username");
  }
  return (
    <div className='forgot-container'>
      <form className='forgot-form' onSubmit={handleSubmit}>
        <h2 className="forgot-header">Forgot Password</h2>
        <label htmlFor="email" className='forgot-label'>Email: </label>
        <input className="forgot-input" type="email" placeholder='Players Email' id="email" />

        <button type="submit" className="login-button">Send Username</button>

      </form>
    </div>
  )
}

export { ForgotP, ForgotU };