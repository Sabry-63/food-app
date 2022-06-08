import React from 'react';
import HeaderPage from '../layout/HeaderPage';
import Chef from './../sections/Chef';
import About from './../sections/About';
import { ScrollToTop } from './../components/ScrollToTop';

const ChefPage = () => {
    ScrollToTop();

    return (
        <React.Fragment>
            <HeaderPage title="Chef" link="Chef" />
            <Chef />
            <About />
        </React.Fragment>
    );
};

export default ChefPage;
