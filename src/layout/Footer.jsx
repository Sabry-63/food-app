import React from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="main-footer py-5">
                <Container>
                    <Row>
                        <Col md={6} lg={3}>
                            <div className="footer__content">
                                <h3 className="footer__title text-uppercase mb-4">
                                    TASTE.IT
                                </h3>
                                <p className="footer__desc mb-3">
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they
                                    live in Bookmarksgrove
                                </p>
                                <ul className="footer__sochial d-flex mt-3">
                                    <li>
                                        <Link to="#" aria-label="icon">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" aria-label="icon">
                                            <i
                                                className="fa fa-facebook-f"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" aria-label="icon">
                                            <i
                                                className="fa fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="footer__content">
                                <h3 className="footer__title text-uppercase mb-4">
                                    OPEN HOURS
                                </h3>
                                <ul className="footer__lsit-time">
                                    <li className="d-flex mb-1">
                                        <span>Monday</span>
                                        <span>9:00 - 24:00</span>
                                    </li>
                                    <li className="d-flex mb-1">
                                        <span>Tuesday</span>
                                        <span>9:00 - 24:00</span>
                                    </li>
                                    <li className="d-flex mb-1">
                                        <span>Wednesday</span>
                                        <span>9:00 - 24:00</span>
                                    </li>
                                    <li className="d-flex mb-1">
                                        <span>Thursday</span>
                                        <span>9:00 - 24:00</span>
                                    </li>
                                    <li className="d-flex mb-1">
                                        <span>Friday</span>
                                        <span>9:00 - 02:00</span>
                                    </li>
                                    <li className="d-flex mb-1">
                                        <span>Saturday</span>
                                        <span>9:00 - 02:00</span>
                                    </li>
                                    <li className="d-flex mb-1">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="footer__content">
                                <h3 className="footer__title text-uppercase mb-4">
                                    INSTAGRAM
                                </h3>
                                <div className="footer__list-imgs">
                                    <div className="row g-0">
                                        <div className="col-4">
                                            <Link
                                                className="bg-one d-block"
                                                to="#"
                                                aria-label="bg-image"
                                            ></Link>
                                        </div>
                                        <div className="col-4">
                                            <Link
                                                className="bg-tow d-block"
                                                to="#"
                                                aria-label="bg-image"
                                            ></Link>
                                        </div>
                                        <div className="col-4">
                                            <Link
                                                className="bg-three d-block"
                                                to="#"
                                                aria-label="bg-image"
                                            ></Link>
                                        </div>
                                        <div className="col-4">
                                            <Link
                                                className="bg-four d-block"
                                                to="#"
                                                aria-label="bg-image"
                                            ></Link>
                                        </div>
                                        <div className="col-4">
                                            <Link
                                                className="bg-five d-block"
                                                to="#"
                                                aria-label="bg-image"
                                            ></Link>
                                        </div>
                                        <div className="col-4">
                                            <Link
                                                className="bg-six d-block"
                                                to="#"
                                                aria-label="bg-image"
                                            ></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="footer__content">
                                <h3 className="footer__title text-uppercase mb-4">
                                    NEWSLETTER
                                </h3>
                                <p className="footer__desc mb-3">
                                    Far far away, behind the word mountains, far
                                    from the countries.
                                </p>
                                <form
                                    className="footer__from"
                                    action="#"
                                    method="method"
                                >
                                    <input
                                        className="p-3 w-100 mb-2 text-center border-0"
                                        type="text"
                                        placeholder="Enter Your Email"
                                    />
                                    <button
                                        className="btn main-btn w-100"
                                        type="submit"
                                    >
                                        Subscibe
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="copy-right py-3">
                <Container>
                    <p className="text-center">
                        Copyright &copy;2022 All rights reserved | This template
                        is made with by EraaSoft
                    </p>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Footer;
