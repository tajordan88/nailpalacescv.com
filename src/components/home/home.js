import React from 'react';

import { CSSTransitionGroup } from 'react-transition-group';

import './home.css';

export default function Home() {
  return (
    <main role="main" className="inner cover">
      <CSSTransitionGroup
        transitionName="fade-in"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <h1 className="cover-heading">Serving The Santa Clarita Valley For Over 20 Years</h1>
        <p className="lead">We provide fast, professional, and excellent service</p>
      </CSSTransitionGroup>
    </main>
    
  );
}