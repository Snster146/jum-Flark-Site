import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FamilyTree from './components/FamilyTree'
import NewsLetter from './components/NewsLetter'
import Cards from './components/Cards'

function App() {
  return (  
    <div>
      <Navbar />
      <Hero />
      <FamilyTree />
      <NewsLetter />
      <Cards />
    </div>);
}

export default App;
