import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import "../src/global.css"
import Home from './components/Home/Home';
import Brands from './components/Brands/Brands';
import Growth from './components/Growth/Growth';
import CreatorVerse from './components/CreatorVerse/CreatorVerse';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}

export default App;
