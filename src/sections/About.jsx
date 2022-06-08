import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HandleForm from "./../components/Form";

const About = () => {
    return (
        <React.Fragment>
            <section className="section-about py-0">
                <Container>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className="about__form p-lg-5 px-3 py-5 main-bg h-100 d-flex flex-column justify-content-center">
                                <h2 className="about__form-title mb-4 text-uppercase">
                                    BOOK YOUR TABLE
                                </h2>
                                <HandleForm />
                            </div>
                        </Col>
                        <Col lg={8} md={6}>
                            <div className="about__info p-lg-5 px-3 py-5 mt-5">
                                <div className="main-title">
                                    <h3
                                        className="title__text"
                                        data-title="About"
                                    >
                                        Welcome to <br />
                                        Taste.it
                                    </h3>
                                    <p className="about__desc mt-4">
                                        On her way she met a copy. The copy
                                        warned the Little Blind Text, that where
                                        it came from it would have been
                                        rewritten a thousand times and
                                        everything that was left from its origin
                                        would be the word "and" and the Little
                                        Blind Text should turn around and return
                                        to its own, safe country. A small river
                                        named Duden flows by their place and
                                        supplies it with the necessary
                                        regelialia. It is a paradisematic
                                        country, in which roasted parts of
                                        sentences fly into your mouth.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default About;
