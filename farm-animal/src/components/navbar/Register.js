import React, {useState} from 'react'
import "../../styles/navbar_/Register.css";
import background from '../../assets/Register-background.gif'
import RegBg from "../RegBg";
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
//style={{ backgroundImage:`url(${background})` }
  return (
    <div className="register-container">
      <form className="register-form"onSubmit={handleSubmit}>
        <h2 className="register-header"> Register Now </h2>
        <label htmlFor="username" className= 'reg-label'>Username</label>
        <input value={username} onChange={(e)=> setUsername(e.target.value)}type="username" placeholder="Enter a username" className='reg-input'></input>
        <label htmlFor="email" className= 'reg-label'>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter an email" className='reg-input'></input>
        <label htmlFor="password" className= 'reg-label'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="Enter a password" className='reg-input'></input>
        <button type ="submit" className="register-button">Register</button>
        <Link to ="/Login" >
        <button className="link-button" >Login</button>
        </Link>
      </form>
      <RegBg />
    </div>
  )
}

export default Register
