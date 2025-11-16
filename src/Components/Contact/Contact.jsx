import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
      <h1>Get in touch</h1>
      <img src="" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets's Talk</h1>
            <p>I'm interested in hearing from you!</p>
            <div className="contact-details">
            <div className="contact-detail">
                <img src="" alt="" />
                <p>jitendra7518888@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src="" alt="" />
                <p>+917518888181</p>
            </div>
            <div className="contact-detail">
                <img src="" alt="" />
                <p>Noida, Uttar Pradesh, India</p>
            </div>
            </div>
        </div>
        <form className="contact-right">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your Name" name='name' />
        <label>Your Email</label>
        <input type="email" placeholder="Enter your Email" name='email' />
        <label>Your Message</label>
        <textarea placeholder="Enter your Message" name='message' rows='8'></textarea>
        <button className='contact-submit' type="submit">Submit now</button>
      </form>
      </div>
     
    </div>
  )
}

export default Contact