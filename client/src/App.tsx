import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Header from './Header';
import SVG from './svg';

function App() {
  return (
    <div className="App">
      <SVG />
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
