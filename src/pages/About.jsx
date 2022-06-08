import React from 'react';
import HeaderPage from '../layout/HeaderPage';
import Perfect from './../sections/Perfect';
import Booknow from './../sections/BookNow';
import Testmonial from './../sections/Testmonial';
import { ScrollToTop } from './../components/ScrollToTop';
const About = () => {
    ScrollToTop();

    return (
        <React.Fragment>
            <HeaderPage title="About" link="About" />
            <Perfect />
            <Booknow />
            <Testmonial />
        </React.Fragment>
    );
};

export default About;
