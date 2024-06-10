import React from 'react';
import './Team.css';
import johnDoeImg from './img/bob.jpeg'; 
import janeSmithImg from './img/ira.jpeg'; 
import bobJohnsonImg from './img/stev.jpeg'; 

const Team = () => {
  return (
    <section id="team" className="section3">
      <div className="team-text">
        <h2>Наші спеціалісти знають свою справу </h2>
       <div className="team-fon"> <p>Я забезпечу подання Ваших інтересів у судах загальної юрисдикції, арбітражі, третейському суді, візьму участь у переговорах.</p></div>
        <button class="team-button" onClick={() => window.scrollTo(0, 0)}>Зв'язатись з нами</button>
      </div>
      <div className="team-members">
        <div className="team-member">
          <img src={johnDoeImg} alt="John Doe" />
          <p className="member-name"><h4>Тарас Паляниця</h4>стаж 15 років.</p>
        </div>
        <div className="team-member">
          <p className="member-name top"><h4>Оксана Гичко</h4>стаж 7 років.</p>
          <img src={janeSmithImg} alt="Jane Smith" />
        </div>
        <div className="team-member">
          <img src={bobJohnsonImg} alt="Bob Johnson" />
          <p className="member-name"><h4>Микола Грибенко</h4>стаж 11 років.</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
