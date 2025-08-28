import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <div className="home-page text-center mt-5">
      <h1 className="mb-4">Welcome to Contoso Coffee</h1>
      <p className="lead mb-5">Your one-stop shop for the best coffee online.</p>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link to="/admin" className="btn btn-primary btn-lg">
          Admin
        </Link>
        <Link to="/catalog" className="btn btn-secondary btn-lg">
          Catalog
        </Link>
      </div>
    </div>
  );
};

export default Home;
