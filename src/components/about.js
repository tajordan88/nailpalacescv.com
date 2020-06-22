import React from 'react';
import { Element } from 'react-scroll';

import './about.css'

const about = () => {
    return (
        <section>
            <Element name="about">
                <div className="container-fluid">
                    <div className="box">
                        <div className="spacing">
                            <div className="box-padding qs">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h1 className="heading-about">About</h1>
                                        <hr />
                                    </div>
                                    <div className="col-lg-5 col-xl-4 about-message">
                                        <h4 className="about-subtitle">Quality Service</h4>
                                        <p>Nail Palace offers a variety of services for both men and women. Our professional staff use only the highest quality products and are committed to providing the latest in manicure and pedicure care.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-end">
                    <div className="box">
                        <div className="spacing">
                            <div className="box-padding hs">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 col-xl-4 about-message">
                                        <h4 className="about-subtitle">Health &amp; Safety</h4>
                                        <p>Our commitment to your health and overall well-being is our highest priority. As part of this commitment to excellent sanitation, all of our instruments are sterilized and disinfected after each use. </p>
                                        <hr />
                                    </div>
                                    <div className="col">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="box">
                        <div className="spacing">
                            <div className="box-padding sc">
                                <div className="row align-items-center">
                                    <div className="col"></div>
                                    <div className="col-lg-5 col-xl-4 about-message">
                                        <h4 className="about-subtitle">100% Disposable Jet</h4>
                                        <p>We also carry the one and only <a href="https://www.contegospa.com/" rel="noopener noreferrer" target="_blank">Contego Spa Chairs</a> and Patented 100% Disposable Jet guaranteeing you safe and quality service.</p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default about;