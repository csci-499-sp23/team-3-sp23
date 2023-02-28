import React, {useState} from 'react'
import "../../styles/navbar_/Register.css";
import background from '../../assets/Register-background.gif'
import axios from 'axios';
import { Link } from "react-router-dom"


const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post('backend/routes/addUser.js/register', { username, email, pass})
      console.log("Sucessful!")
    } catch (error) {
      console.log("Error");
    }
    
  }

  return (
  
    <div className="register-container" style={{ backgroundImage:`url(${background})` }} >
      <form className="register-form"onSubmit={handleSubmit}>
        <h2 className="register-header"> Register Now </h2>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e)=> setUsername(e.target.value)}type="username" placeholder="create username"></input>
        
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your email"></input>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="enter password"></input>
        <button type ="submit" className="register-button">Register</button>
        <Link to ="/Login" >
        <button className="link-button" >Login</button>
        </Link>
      
      </form>
      
     

    </div>
    
  )
}

export default Register
