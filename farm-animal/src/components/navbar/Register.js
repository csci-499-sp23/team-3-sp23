import React, {useState} from 'react'
import "../../styles/navbar_/Register.css";
import axios from 'axios';
import { Link } from "react-router-dom"


const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = axios.post('backend/routes/addUser.js/register', { username, email, pass})
      console.log("Sucessful!")
    } catch (error) {
      console.log("Error");
    }
    
  }

  return (
  
    <div className="register-container">
      <form className="register-form"onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e)=> setUsername(e.target.value)}type="username" placeholder="create username"></input>
        
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your email"></input>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="enter password"></input>
        <button type ="submit">Register</button>
        <Link to ="/Login" className="link-button">
        <button  >Login</button>
        </Link>
        {/* <a href="/login">
        
        </a> */}
      </form>
      
      
      {/* <button className="link-button" onClick={() => props.onFormSwitch('login')}>Sign in</button> */}

    </div>
    /*
    <div>Register</div>

    <div className="register-container">
      <form className="register-form"onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e)=> setUsername(e.target.value)}type="username" placeholder="create username"></input>

        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your email"></input>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="enter password"></input>
        <button type ="submit">Register</button>
        <a href="/login">
        <button className="link-button" >Login</button>
        </a>
      </form>
    */  
  )
}

export default Register
