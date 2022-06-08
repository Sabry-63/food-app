import React, { useEffect, useState } from 'react';
// import cookie from 'js-cookie';

import {
    Col,
    Container,
    Nav,
    Navbar as NavbarBootstrap,
    Row,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

const Navbar = () => {
    // const { t } = useTranslation();

    // Navbar fiexd top
    const [stickyClass, setStickyClass] = useState('');
    const [navBgDark, setNavBgDark] = useState('navbar__content-bg');

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500
                ? setStickyClass('fixed-top navbar-top animate__slideInDown')
                : setStickyClass('');

            windowHeight > 500
                ? setNavBgDark('')
                : setNavBgDark('navbar__content-bg');
        }
    };

    // languages Setting
    // const languages = [
    //     {
    //         code: 'en',
    //         name: 'English',
    //         county_code: 'gb',
    //     },
    //     {
    //         code: 'ar',
    //         name: 'العربية',
    //         county_code: 'sa',
    //         dir: 'rtl',
    //     },
    // ];

    // const currentLanguageCode = cookie.get('i18next') || 'en';
    // const currentLanguage = languages.find(
    //     (l) => l.code === currentLanguageCode
    // );

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    // useEffect(() => {
    //     document.body.dir = currentLanguage.dir || 'ltr';

    //     if (document.body.dir === 'rtl') {
    //         cookie.set('i18next', currentLanguage.code);
    //         // import(t('style.css'));
    //         // import(t('style.bootstrap'));
    //         // import('bootstrap/dist/css/bootstrap.rtl.min.css');
    //         console.log('ar');
    //     } else {
    //         cookie.set('i18next', currentLanguage.code);
    //         // import('bootstrap/dist/css/bootstrap.min.css');
    //         // import('../sass/main-ltr.scss');
    //         console.log('en');
    //     }
    // }, [currentLanguage, t]);

    return (
        <div className="navbar-content">
            <div className="upper-nav pt-2 d-none d-lg-block  ">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={6}>
                            <div className="upper-nav__info">
                                <span>Phone no: </span>
                                <span className="upper-nav__contact">
                                    +00 1234 567{' '}
                                </span>
                                <span>or </span>
                                <span> email us: </span>
                                <span className="upper-nav__contact">
                                    emailsample@email.com
                                </span>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className=" upper-nav__shochail d-flex justify-content-lg-end align-items-center">
                                <span className="me-2">
                                    Mon - Fri / 9:00-21:00, Sat - Sun /
                                    10:00-20:00
                                </span>
                                <ul className="upper-nav__icons d-flex align-items-center">
                                    <li>
                                        <Link
                                            to="#"
                                            className="upper-nav__icon"
                                            aria-hidden="true"
                                        >
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="upper-nav__icon"
                                            aria-hidden="true"
                                        >
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="upper-nav__icon"
                                            aria-hidden="true"
                                        >
                                            <i
                                                className="fa fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="upper-nav__icon"
                                            aria-hidden="true"
                                        >
                                            <i
                                                className="fa fa-dribbble "
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <NavbarBootstrap
                bg=""
                expand="lg"
                className={`animate__animated pb-2 ${stickyClass}`}
            >
                <Container>
                    <div
                        className={`navbar navbar__content w-100  ${navBgDark}`}
                    >
                        <NavbarBootstrap.Brand>
                            Taste.
                            <span>it </span>
                        </NavbarBootstrap.Brand>
                        <NavbarBootstrap.Toggle className="border-0">
                            <span className="text-uppercase  navbar__btn-toggle">
                                Menu
                            </span>
                        </NavbarBootstrap.Toggle>
                        <NavbarBootstrap.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto" as="ul">
                                <Nav.Item as="li">
                                    <NavLink
                                        id="RouterNavLink"
                                        className="nav-link text-uppercase"
                                        to="/"
                                    >
                                        home
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item as="li">
                                    <NavLink
                                        className="nav-link text-uppercase"
                                        to="/about"
                                        id="RouterNavLink"
                                    >
                                        about
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item as="li">
                                    <NavLink
                                        className="nav-link text-uppercase"
                                        id="RouterNavLink"
                                        to="/chef"
                                    >
                                        chef
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item as="li">
                                    <NavLink
                                        className="nav-link text-uppercase"
                                        to="/menu"
                                        id="RouterNavLink"
                                    >
                                        menu
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item as="li">
                                    <NavLink
                                        className="nav-link text-uppercase"
                                        to="/reservation"
                                        id="RouterNavLink"
                                    >
                                        reservation
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item as="li">
                                    <NavLink
                                        className="nav-link text-uppercase"
                                        to="/blog"
                                        id="RouterNavLink"
                                    >
                                        blog
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item as="li">
                                    <NavLink
                                        className="nav-link text-uppercase"
                                        to="/contact"
                                        id="RouterNavLink"
                                    >
                                        contact
                                    </NavLink>
                                </Nav.Item>
                                {/* 
                                <NavDropdown
                                    title={t('navbar.languages')}
                                    id="basic-nav-dropdown"
                                >
                                    {languages.map(
                                        ({ code, name, county_code }) => {
                                            return (
                                                <NavDropdown.Item
                                                    key={county_code}
                                                    onClick={() => {
                                                        i18next.changeLanguage(
                                                            code
                                                        );
                                                        cookie.remove(
                                                            'i18next'
                                                        );
                                                        cookie.set(
                                                            'i18next',
                                                            code
                                                        );
                                                    }}
                                                >
                                                    <span
                                                        className={`fi fi-${county_code} me-2`}
                                                    ></span>
                                                    {name}
                                                </NavDropdown.Item>
                                            );
                                        }
                                    )}
                                </NavDropdown> */}
                            </Nav>
                        </NavbarBootstrap.Collapse>
                    </div>
                </Container>
            </NavbarBootstrap>
        </div>
    );
};

export default Navbar;
