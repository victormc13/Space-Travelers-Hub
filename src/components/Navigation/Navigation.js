import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';

const Navigation = () => (
  <header className="header">
    <div className="container">
      <nav className="navigation">
        <div className="logo">
          <img className="img" src={logo} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <ul className="nav-List">
          <li className="nav-item">
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>Rockets</span>
              )}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/missions">
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>missions</span>
              )}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dragons">
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>dragons</span>
              )}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile">
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>my profile</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navigation;
