import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Coins from './components/Coins';
import Markets from './components/Markets';

import './App.css';

function App() {

  return (
    <div>
      <div className="App">
        {/* <Navbar /> */}
      </div>

      <Route exact path='/' render={() => <Home />}/>
      <Route path='/coins' render={() => <Coins />}/>
      <Route path='/markets' render={() => <Markets />}/>
    </div>
  );
}

export default App;
