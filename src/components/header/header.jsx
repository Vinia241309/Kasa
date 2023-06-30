import logo from '../../assets/logo.png';
import './header.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function Header() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <header className='header'>
      <h1>
        <img src={logo} alt="kasa-logo" />
      </h1>
      <nav>
        <ul>
          <li>
          <NavLink to="/accueil" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>
              Accueil
            </NavLink>
          </li>
          <li>
          <NavLink to="/about" className={activeLink === 'about' ? 'active' : ''} onClick={() => setActiveLink('about')}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
