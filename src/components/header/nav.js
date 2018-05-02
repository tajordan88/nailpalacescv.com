import React from 'react';

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav nav-masthead justify-content-center">
      <Link className="nav-link active" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/services">Services</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  );
}