import React, { useState } from 'react'
import axios from 'axios';
import "../../styles/navbar_/Login.css";
import { Link } from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post('backend/routes/loginAuthorization.js/login', { email, password})
      console.log("Sucessful!")
    } catch (error) {
      console.log("Error");
    }
  }
  return (
    <div className='login-container'>
      <form className = 'login-form' onSubmit={handleSubmit}>
        <h2>Account Login</h2>
        <label htmlFor = "email">Email: </label>
        <input className = "login-input" type = "email" placeholder='Players Email' id = "email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor = "password"> Password:</label>
        <input className = "login-input" type = "password" placeholder='Players Password' id = "password" name= "passowrd" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div >
          <Link to = "/forgetUser" className='login-link'>Forget User</Link>
          <Link to = "/forgetPassword">Forget Password</Link>
        </div>
        <button type = "submit">Login Now!</button>
        <Link to = "/Register">Register Here!</Link>
      </form>
    </div>
  )
}

export default Login