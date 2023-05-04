import React, { useRef, useState } from 'react'
import "../../styles/navbar_/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-bootstrap';

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch {
      setError('Password or email is incorrect')
    }
    setLoading(false)
  }
  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className="login-header">Account Login</h2>

        {error && <Alert variant='danger'>{error}</Alert>}

        <label htmlFor="email" className='reg-label'>Email</label>
        <input type="email" ref={emailRef} placeholder="Enter your email" className='login-input' required></input>

        <label htmlFor="password" className='reg-label'>Password</label>
        <input type="password" ref={passwordRef} placeholder="Enter your password" className='login-input' required></input>

        <div >
          <Link to="/forgot-password" className='login-link'>Forgot Password</Link>
        </div>

        <button disabled={loading} type="submit" className="login-button">Login Now!</button>
        <div className='link-text'>
          Need an account?
          <Link to="/Register" className='login-link'>Register Here!</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;