import React, { useState, useEffect } from 'react';
import './Team.css';
import johnDoeImg from './img/bob.jpeg'; 
import janeSmithImg from './img/ira.jpeg'; 
import bobJohnsonImg from './img/stev.jpeg'; 

const teamMembers = [
  { img: johnDoeImg, name: 'Тарас Паляниця', experience: 'стаж 15 років.' },
  { img: janeSmithImg, name: 'Оксана Гичко', experience: 'стаж 7 років.' },
  { img: bobJohnsonImg, name: 'Микола Грибенко', experience: 'стаж 11 років.' }
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="team" className="section3">
      <div className="team-text">
        <h2>Наші спеціалісти знають свою справу</h2>
        <div className="team-fon">
          <p>Я забезпечу подання Ваших інтересів у судах загальної юрисдикції, арбітражі, третейському суді, візьму участь у переговорах.</p>
        </div>
        <button className="team-button" onClick={() => window.scrollTo(0, 0)}>Зв'язатись з нами</button>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className={`team-member ${index === activeIndex ? 'active' : ''}`}>
            <img src={member.img} alt={member.name} />
            <p className="member-name"><h4>{member.name}</h4>{member.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
