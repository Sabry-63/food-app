import React from 'react';

// Imoprt Layout

// Imoprt Sections
import About from '../sections/About';
import Booking from './../sections/Booking';
import Menu from './../sections/Menu';
import Testmonial from './../sections/Testmonial';
import Chef from './../sections/Chef';
import Perfect from './../sections/Perfect';
import Blog from './../sections/Blog';
import BookNow from './../sections/BookNow';
import SimpleSlider from '../sections/Header';
import { ScrollToTop } from './../components/ScrollToTop';

const Home = () => {
    ScrollToTop();

    return (
        <React.Fragment>
            <SimpleSlider />
            <About />
            <Booking />
            <Menu />
            <Testmonial />
            <Chef />
            <Perfect />
            <Blog />
            <BookNow />
        </React.Fragment>
    );
};

export default Home;
