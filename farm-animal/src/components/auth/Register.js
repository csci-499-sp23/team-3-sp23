import React, { useRef, useState } from 'react'
import "../../styles/navbar_/Register.css";
import { Link, useNavigate } from "react-router-dom"
import { firestore } from "../firebase"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { addDoc, collection } from "@firebase/firestore"
import { Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';


const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const ref = collection(firestore, "test");
  const navigate  = useNavigate();
  const handleSubmit = async (e) => {
    
    // const auth = getAuth();

    e.preventDefault();
    let data = {
      email: email,
      password: pass,
      user: username
    }

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match')
    }

    try {

      addDoc(ref, data);
      setError('')
      setLoading(true)
      
      // ---------------------------------
      // createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      //   .then((userCredential) => {
      //     navigate ('/success-register')
      //     sendEmailVerification();
      //     sessionStorage.setItem("Token", userCredential._tokenResponse.refreshToken);
      //     const user = userCredential.username;
      // })
      // ---------------------------------

      await signup(emailRef.current.value, passwordRef.current.value)
      // sendEmailVerification();
      navigate ('/success-register')

    }
    catch (e) {
      setError('Failed to create an account, user already exists')
    }
    setLoading(false)
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-header"> Register Now </h2>
        {error && <Alert variant='danger'>{error}</Alert>}

        <label htmlFor="username" className='reg-label'>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Enter a username" className='reg-input'></input>

        <label htmlFor="email" className='reg-label'>Email</label>
        <div id="result"></div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} type="email" placeholder="Enter an email" className='reg-input'></input>

        <label htmlFor="password" className='reg-label'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" ref={passwordRef} placeholder="Enter a password" className='reg-input'></input>

        <label htmlFor="password-confirm" className='reg-label'>Password Confirm</label>
        <input type="password" ref={passwordConfirmRef} placeholder="Re-enter your password" className='reg-input' required></input>


        <button disabled={loading} type="submit" className="register-button">Register</button>
        <Link to="/Login" >
          <button className="link-button" >Login</button>
        </Link>
      </form>
    </div>
  )
}

export default Register