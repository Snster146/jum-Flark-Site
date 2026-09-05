import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FamilyTree from './components/FamilyTree';
import NewsLetter from './components/NewsLetter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Wordle from './components/Wordle';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<div><Hero /> </div>} />
          <Route path="/family" element={<div><FamilyTree /> </div>} />
          <Route path="/wordle" element={<Wordle />}/>
          <Route path="/subscribe" element={<div><Cards /> </div> }/>
          
        </Routes>
        <NewsLetter /> 
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
