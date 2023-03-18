import React, { useRef, useState } from 'react'
import "../../styles/navbar_/Login.css";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-bootstrap';

const ForgotPassword = () => {

    const emailRef = useRef();

    const { resetPassword } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
    e.preventDefault()

    try{
        setMessage('')
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage('Check your inbox for further instructions')
    } catch {
        setError('There are no account with this email')
    }
    setLoading(false)
    }
    return (
    <div className='login-container'>
    <form className='login-form' onSubmit={handleSubmit}>
        <h2 className="login-header">Password Reset</h2>
        
        {error && <Alert variant='danger'>{error}</Alert>}
        {message && <Alert variant='success'>{message}</Alert>}

        <label htmlFor="email" className='reg-label'>Email</label>
        <input type="email" ref={emailRef} placeholder="Enter your email" className='login-input' required></input>

        <button disabled={loading} type="submit" className="login-button">Reset Password</button>
        <div className='w-100 text-center mb-3'>
            <Link to='/login'>Login</Link>
        </div>
        <div className='link-text'>
            Need an acocunt?
            <Link to="/Register" className='login-link'>Register Here!</Link>
        </div>
    </form>
    </div>
    )
}

export default ForgotPassword;