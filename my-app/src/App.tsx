import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HomePage from './Home';
import Selection from './Selection';
import Proposition from './Proposition';
import Valeurs from './Valeurs';
import Footer from './Footer';
import BackToTopButton from './Backtop';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <HomePage />
      <Selection />
      <Proposition />
      <Valeurs />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
