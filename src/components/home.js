import React from 'react';
import { scroller } from 'react-scroll';

import './home.css';
import About from './about';
import Services from './services';
import Contact from './Contact';
import Modal from './Modal';

class home extends React.Component {
    scrollToMessage = () => {
        scroller.scrollTo("message", {
            smooth: true,
            offset: -72
        });
    };

    render() { 
        return (
            <div className="home">
                <section name="home">
                    <div className="hero">
                        <div className="hero-inner">
                            <h1 className="display-1">Nail Palace</h1>
                            <h4>Great, Fast, Professional Manicure and Pedicure Services</h4>
                            <button data-toggle="modal" data-target="#ModalCenter" className="btn mt-4 call-to-action btn-rounded">Click for a coupon</button>
                            <Modal 
                                scrollToMessage={this.scrollToMessage}
                            />
                        </div>
                    </div>
                    <div name="message "className="container message">
                        <h3 className="mb-0">Nail Palace is committed to serving the best for you.</h3>
                    </div>
                </section>
                <About/>
                <Services />
                <Contact />           
            </div>
        );
    }
};

export default home;