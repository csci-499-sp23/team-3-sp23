import React, { useState } from 'react'
import "../../styles/navbar_/Login.css";
import { Link } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
        })
    } catch (error) {
      console.log("Error");
    }
  }
  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className="login-header">Account Login</h2>
        <label htmlFor="email" className='login-label'>Email: </label>
        <input className="login-input" type="email" placeholder='Players Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password" className='login-label'> Password:</label>
        <input className="login-input" type="password" placeholder='Players Password' id="password" name="passowrd" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div >

          <Link to="/ForgotP" className='login-link'>Forget Password</Link>
        </div>
        <button type="submit" className="login-button">Login Now!</button>
        <Link to="/Register" className='login-link'>Register Here!</Link>
      </form>
    </div>
  )
}

export default Login;