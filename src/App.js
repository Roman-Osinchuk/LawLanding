import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
