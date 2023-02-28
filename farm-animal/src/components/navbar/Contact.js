import React from 'react'
import "../../styles/navbar_/Contact.css";
const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact Us!</h1>
      <form className = 'contact-form' action = "https://formsubmit.co/emailhere@gmail.com" method='POST'>
        <label className= 'contact-label' htmlFor = "name">Name: </label>
        <input className = 'contact-input' type = "name" placeholder='Name...' id = "name"/>
        <label className= 'contact-label' htmlFor = "email">Email: </label>
        <input className = 'contact-input' type = "email" placeholder='Email...' id = "email"/>
        <label className= 'contact-label' htmlFor = "name">Phone: </label>
        <input className = 'contact-input' type = "phone" placeholder='+1 (123) 456-7890' id = "phone"/>
        <label className= 'contact-label' htmlFor = "name">Comment: </label>
        <textarea className = 'contact-text' type = "comment" placeholder='Comments/Suggestions' id = "comment"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact