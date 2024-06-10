import React from 'react';
import './Services.css';
import ATB from './img/atb.png'; 
import VIVO from './img/vivo.png'; 
import Lvivske from './img/Lvivske.png';
import BINANCE from './img/binance.png';
import FOX from './img/fox.png';

const services = [
  { id: 1, image: ATB, description: 'АТБ' },
  { id: 2, image: VIVO, description: 'VIVO' },
  { id: 3, image: Lvivske, description: 'Львівcьке' },
  { id: 4, image: BINANCE, description: 'Binance' },
  { id: 5, image: FOX, description: 'Foxtrot' },
];

const Services = () => {
  return (
    <section id="services" className="section2">
      <div className="section-header">
        <p>Нам Довіряють</p>
        <h1>ВОНИ ВИБРАЛИ НАС </h1>
      </div>
      <div className="services-container">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <img src={service.image} alt={service.description} />
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
