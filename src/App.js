import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Compnents/Navbar';
import Index from './Compnents/Index';
import Contact from './Compnents/Contact';
import ReactDOM from "react-dom/client";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
      </BrowserRouter>

    )
  }
}

export default App;
