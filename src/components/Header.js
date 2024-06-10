import React from 'react';
import './Header.css';
import logo from './img/debol.png'; 

const Header = () => {
  return (
      <header className="header">
        <nav className="nav">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#about">Переваги</a></li>
            <li><a href="#team">Cпівробітники</a></li>
            <li><a href="#services">Компанії</a></li>
            <li><a href="#contact">Контакти</a></li>
          </ul>
          <div className="contact-number">
          <p>+380 (66) 148 8169</p>
        </div>
      </nav>
      <div className="header-content">
        <div className="header-text">
        <h1>Допоможемо вам</h1>
          <p>з будь-якими юридичними питаннями.</p>
          <div className="additional-info">
      <div className="info-container">
         <h2>91%</h2>
            <p>Виграних діл</p>
         </div>
       <div className="info-container">
           <h2>12</h2>
         <p>Співробітників</p>
       </div>
      <div className="info-container">
       <h2>10</h2>
        <p>Років на ринку</p>
       </div>
      </div>
        </div>
        <div className="registration-form">
          <h2>Для зв'язку з вами</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <button type="submit">Надати</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
