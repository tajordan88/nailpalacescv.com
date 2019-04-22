import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';
import Home from './home';

const aboutpage = () => {
    return (
        <div>
            This is the about page.
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={aboutpage} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;