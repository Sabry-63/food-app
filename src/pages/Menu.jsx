import React from 'react';
import HeaderPage from '../layout/HeaderPage';
import HandleForm from '../components/Form';
import Menu from '../sections/Menu';
import { ScrollToTop } from './../components/ScrollToTop';

const MenuPage = () => {
    ScrollToTop();

    return (
        <React.Fragment>
            <HeaderPage title="Menu" link="Menu" />
            <Menu />
            <section className="section-about py-0">
                <div className="about__form p-lg-5 py-5 px-3 main-bg h-100 d-flex flex-column justify-content-center">
                    <h4 className="about__form-title mb-4 text-uppercase">
                        BOOK YOUR TABLE
                    </h4>

                    <HandleForm />
                </div>
            </section>
        </React.Fragment>
    );
};

export default MenuPage;
