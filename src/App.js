import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import CallToActionTop from './components/calltoaction_top/calltoaction_top';
import CallToActionRight from './components/calltoaction_right/calltoaction_right';

class App extends Component {
  render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <CallToActionTop />
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
        <CallToActionRight />
      </div>
    );
  }
}

export default App;
