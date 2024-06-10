import React from 'react';
import './About.css';
import VectorImage from './img/Vector.png'; 
import HorseImage from './img/horse.png'; 
import BookImage from './img/book.png'; 
import BakpackImage from './img/backpack.png'; 
const About = () => {
  return (
    <section id="about" className="sectionAbout">
      <div className="section-content1">
        <div class="context"><p>Наші переваги</p></div>
        <h2>Чому вибрають нас</h2>
      </div>

      <div class="additional-info1">
        <div class="info-container1">
          <img src={VectorImage} alt="Vector Image" /> {}
          <h2>Цілодобова Підтримка</h2>
          <p>Дзвінки по будь-яким питанням в зручний для вас час.</p>
        </div>

        <div class="info-container1">
        <img src={BookImage} alt="Book Image" /> {}
          <h2>Висока Експертність</h2>
          <p>Наші спеціалісти постійно поліпшуються.</p>
        </div>
        <div class="info-container1">
        <img src={HorseImage} alt="Book Image" /> {}
          <h2>Думаєм на два кроки поперед</h2>
          <p>Дзвінки по любим питанням в зручний час.</p>
        </div>
        <div class="info-container1">
        <img src={BakpackImage} alt="Book Image" /> {}
          <h2>Знання - наша сила</h2>
          <p>Ми завжди рядом.</p>
        </div>
      </div>

      <button class="button" onClick={() => window.scrollTo(0, 0)}>Зв'язатись з нами</button>

    </section>
    
  );
}

export default About;
