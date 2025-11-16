import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <hr />
      <div className="footer-bottom">
        <div>
        <img src="/logo.png" alt="Logo" className="footer-logo" />
        <p className='footer-bottom-left'>Designed by Jitendra Vishwakarma</p>
        </div>
      </div>
    </div>
  )
}

export default Footer