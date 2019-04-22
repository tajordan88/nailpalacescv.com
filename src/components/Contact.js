import React from 'react';

import './Contact.css';

const Contact = () => {
    return (
        <section name="contact">
            <h1 className="contact">Visit Us</h1>
            <div className="container py-5 margin-bottom-md">
                <div className="row text-center margin-bottom-md">
                    <div className="col-sm-6 enough-space left align-center">
                        <div className="horizontal-center">
                            <div className="address">
                                <h4>Nail Palace</h4>
                                <p className="sameline">27600 Bouquet Cyn Rd #128</p>
                                <p className="sameline">Saugus, CA 91350</p>
                                <p className="sameline">(Across from Albertsons)</p>
                            </div>
                            <div className="contact-info">
                                <p className="sameline">Phone: 661-296-8828</p>
                                <p className="sameline">Email: tavicky88@yahoo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 enough-space right hours">
                        <div className="hours-of-op">
                            <h4 className="text-left-align">Hours:</h4>
                            <table className="table-hours">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="text-left-align min-width">
                                                <strong>Mon</strong>
                                            </div>
                                        </td>
                                        <td className="sameline">
                                            <span>9:30am - 7:00pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left-align min-width">
                                                <strong>Tue</strong>
                                            </div>
                                        </td>
                                        <td className="sameline">
                                            <span>9:30am - 7:00pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left-align min-width">
                                                <strong>Wed</strong>
                                            </div>
                                        </td>
                                        <td className="sameline">
                                            <span>9:30am - 7:00pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left-align min-width">
                                                <strong>Thur</strong>
                                            </div>
                                        </td>
                                        <td className="sameline">
                                            <span>9:30am - 7:00pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left-align min-width">
                                                <strong>Fri</strong>
                                            </div>
                                        </td>
                                        <td className="sameline">
                                            <span>9:30am - 7:00pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left-align min-width">
                                                <strong>Sat</strong>
                                            </div>
                                        </td>
                                        <td className="">
                                            <span className="sameline">9:00am - 5:30pm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left-align min-width">
                                                <strong>Sun</strong>
                                            </div>
                                        </td>
                                        <td className="">
                                            <span>Closed</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div id="map">
                    <iframe title="Nail Palace Map" className="google-maps-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13161.522515267823!2d-118.5116789!3d34.4424846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86d53a7c4a948e33!2sNail+Palace!5e0!3m2!1sen!2sus!4v1554237384813!5m2!1sen!2sus" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
}
export default Contact;