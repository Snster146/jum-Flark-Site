import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FamilyTree from './components/FamilyTree'
import NewsLetter from './components/NewsLetter'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Wordle from './components/Wordle'

function App() {
  return (  
    <div>
    
      <Navbar />
      <Hero />
      <FamilyTree />
      <NewsLetter />
      <Cards />
      <Footer />
      <Wordle />
    </div>);
}

export default App;
