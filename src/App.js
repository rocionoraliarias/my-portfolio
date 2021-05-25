
import React, {Fragment } from 'react';
import Languageinfo from './Context/LanguageContext';
import Navbar from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import ContactMe from './Components/ContactMe/ContactMe'
import './App.css';

function App() {
  

  return (
   <Fragment>
  <Languageinfo>
   <Navbar/>
   <AboutMe/>
   <Portfolio/>
   <Skills/>
   <Experience/>
   <ContactMe/>
   </Languageinfo>
   </Fragment>
  );
}

export default App;
