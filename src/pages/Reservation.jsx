import React from 'react';

import HeaderPage from '../layout/HeaderPage';
import Perfect from './../sections/Perfect';
import HandleForm from '../components/Form';
import { ScrollToTop } from './../components/ScrollToTop';

const Reservation = () => {
    ScrollToTop();

    return (
        <React.Fragment>
            <HeaderPage title="Book A Table Now" link="Reservation" />
            <section className="section-about pt-0">
                <div className="about__form p-lg-5 py-5 px-3 main-bg h-100 d-flex flex-column justify-content-center">
                    <h4 className="about__form-title mb-4 text-uppercase">
                        BOOK YOUR TABLE
                    </h4>
                    <HandleForm />
                </div>
            </section>
            <Perfect />
        </React.Fragment>
    );
};

export default Reservation;
