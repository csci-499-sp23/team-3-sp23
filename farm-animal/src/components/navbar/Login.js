import React, { useState } from 'react'
import axios from 'axios';
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
    <div className=''>
      <form onSubmit={handleSubmit}>
        <label htmlFor = "email">Email: </label>
        <input type = "email" placeholder='Players Email' id = "email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor = "password"> Password:</label>
        <input type = "password" placeholder='Players Password' id = "password" name= "passowrd" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type = "submit">Login Now!</button>
      </form>
      <Link to = "/Register" className='test'>Register Here!</Link>
    </div>
  )
}

export default Login