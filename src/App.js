import React, { Component } from 'react';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer/footer';
import CallToActionTop from './components/calltoaction_top/calltoaction_top';
import CallToActionRight from './components/calltoaction_right/calltoaction_right';

class App extends Component {
  render() {
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <CallToActionTop />
        <Header />
        <Main />
        <Footer />
        <CallToActionRight />
      </div>
    );
  }
}

export default App;
