import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import './App.css';
import ThemeSwitcher from './ThemeSwitcher';
import Resume from "./DownloadResume";
import SocialMedia from './SocialMedia';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <ThemeSwitcher />
      <SocialMedia />
    </div>
  );
}

export default App;
