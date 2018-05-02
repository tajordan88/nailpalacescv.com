import React, { Component } from 'react';

import Nav from './nav';

import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Nail Palace</h3>
          <h6 className="masthead-subtext">Nobody Does It Better!</h6>
          <Nav />
        </div>
      </header>
    );
  }
}