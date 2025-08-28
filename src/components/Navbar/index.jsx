import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">Contoso Coffee Machine</div>
      <div className="navbar-user">
        <span>Welcome, user</span>
        <img src="https://via.placeholder.com/40" alt="User" />
      </div>
    </div>
  );
};

export default Navbar;
