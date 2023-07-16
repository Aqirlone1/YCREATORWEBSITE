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
import CreatorPage from './pages/CreatorPage/CreatorPage';
import IndexRoute from './routes/IndexRoute';

function App() {
  return (
    <div className="App">
     {/* <HomePage/>
      */}
      <IndexRoute/>
    </div>
  );
}

export default App;
