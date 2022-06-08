import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import chef1 from "../assets/images/chef/chef-1.webp";
import wallpaper3 from "../assets/images/header/wallpaper3.webp";

const Perfect = () => {
    return (
        <React.Fragment>
            <section className="section-ingredients p-0">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={6}>
                                    <img
                                        className="ingredients__img"
                                        src={chef1}
                                        alt="img-chef"
                                    />
                                </Col>
                                <Col lg={6}>
                                    <img
                                        className="ingredients__img"
                                        src={wallpaper3}
                                        alt="img-chef"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} className="p-lg-5 px-3 py-5">
                            <div className="main-title mt-5 mb-4">
                                <h3
                                    className="title__text"
                                    data-title="This is our secrets"
                                >
                                    Perfect Ingredients
                                </h3>
                            </div>
                            <p className="ingredients__desc mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.
                            </p>
                            <Link to="#" className="btn main-btn">
                                Learn more
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Perfect;
