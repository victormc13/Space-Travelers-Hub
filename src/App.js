import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Dragons from './components/Dragons/Dragons';
import Profile from './components/Profile/Profile';

const App = () => (

  <>
    <Navigation />
    <div className="container">
      <div className="app">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  </>
);
export default App;
