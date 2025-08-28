import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand mx-auto" to="/">
          <div className="navbar-title">Contoso Coffee Machine</div>
        </Link>
        <div className="d-flex align-items-center">
          <span className="me-3">Welcome, user</span>
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-circle"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
