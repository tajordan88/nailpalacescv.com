import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Nail Palace</h3>
          <h3 className="masthead-brand">Nobody Does It Better!</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Services</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
}