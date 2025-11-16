import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.css';
import React, { useState,useRef } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuref = useRef(null)
  const openmenu = () => {
    menuref.current.style.right = '0';
  }
  const closemenu = () => {
    menuref.current.style.right = '-350px';
  }
  return (
    <div className="navbar">
     <img src="../../../public/logo.png" alt="Logo" className="navbar-logo" /> 
     <img src="../../../public/menu-open.svg" onClick={openmenu} alt="Menu Icon" className="nav-mob-open" />
      <ul ref={menuref} className="nav-menu">
        <img src="../../../public/menu-close.svg" onClick={closemenu} alt="" className="nav-mob-close" />
        <li> <AnchorLink className='anchor-link' href="#home"> <p className={`navbar-item ${menu === "home" ? "active": ""}`} onClick={() => setMenu("home")}>
          Home
          </p>
        </AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href="#about"> <p className={`navbar-item ${menu === "about" ? "active": ""}`} onClick={() => setMenu("about")}>
          About
          </p>
        </AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href="#services"> <p className={`navbar-item ${menu === "services" ? "active": ""}`} onClick={() => setMenu("services")}>
          Services
        </p>
        </AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href="#work"> <p className={`navbar-item ${menu === "work" ? "active": ""}`} onClick={() => setMenu("work")}>
          Portfolio
        </p>
        </AnchorLink></li>
        <li> <AnchorLink className='anchor-link' href="#contact"> <p className={`navbar-item ${menu === "contact" ? "active": ""}`} onClick={() => setMenu("contact")}>
          Contact
        </p>
        </AnchorLink></li>
      </ul>
       <div className="nav-connect"> <AnchorLink className='anchor-link' href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
}
export default Navbar;