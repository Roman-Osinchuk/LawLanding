import React from 'react';
import './Contact.css';
import LvivPsychiatricHospital from './img/mappng.png';

const Contact = () => {
  return (
    <section id="contact" className="section4">
      <div className="contact-container">
        <div className="contact-map">
          <img src={LvivPsychiatricHospital} alt="Lviv Psychiatric Hospital" className="contact-image" />
        </div>
        <div className="contact-info">
          <h2>КОНТАКТНА ІНФОРМАЦІЯ</h2>
          <p>Емейл: Debol@lawfirm.com <br /> Phone: +380 (66) 148 8169</p>
          <p>Адреса: м. Львів вул. Кульпарківська 95</p>
          <div className="input-container">
            <input type="text" placeholder="Замовити дзвінок" className="phone-input" />
            <button className="submit-button">Відправити</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
