import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Error from './pages/Error';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">about</NavLink></li>
          <li><NavLink to="/contacts">contacts</NavLink></li>
        </ul>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    );
  }
}

export default App;
