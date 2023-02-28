import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = axios.post('/api/register', { name, email, password})
      console.log("Sucessful!")
    } catch (error) {
      console.log("Error");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Full Name: </label>
      <input type = "name" placeholder='Players Name' id = "name" value = {name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor = "email">Email: </label>
      <input type = "email" placeholder='Players Email' id = "email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor = "password"> Password:</label>
      <input type = "password" placeholder='Players Password' id = "password" name= "passowrd" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type = "submit">Create Account</button>
    </form>
  )
}

export default Register