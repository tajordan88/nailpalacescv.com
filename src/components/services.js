import React from 'react';

import './services.css';
import NaturalNailCare from './services/NaturalNailCare';
import Pedicure from './services/Pedicure';
import Skincare from './services/Skincare';
import NailEnhancements from './services/NailEnhancements';
// import GelColor from './services/GelColor';
import AdditionalServices from './services/AdditionalServices';
import Wax from './services/Wax';
// import EyeWork from './services/EyeWork';
// import PermanentMakeup from './services/PermanentMakeup';
import Disclaimer from './services/Disclaimer';

const services = () => {
  return (
    <section name="services" className="small-menu menu-section">
      <div className="spacing">
        <h1 className="services-format">Services</h1>
        <NaturalNailCare />
        <Pedicure />
        <NailEnhancements />
        {/* <GelColor /> */}
        <AdditionalServices />
        <Wax />
        <Skincare />
        {/* <EyeWork />
        <PermanentMakeup /> */}
        <Disclaimer />
      </div>
    </section>
  );
};
export default services;
