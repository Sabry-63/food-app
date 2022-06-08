import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import chef1 from "../assets/images/chef/chef-1.webp";
import chef2 from "../assets/images/chef/chef-2.webp";
import chef3 from "../assets/images/chef/chef-3.webp";
import chef4 from "../assets/images/chef/chef-4.webp";

const Chef = () => {
    const chefs = [
        {
            img: chef1,
            name: "John Gustavo",
            position: " CEO, Co Founder",
            desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        },
        {
            img: chef2,
            name: " Michelle Fraulen",
            position: "Head Chef",
            desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        },
        {
            img: chef3,
            name: " Alfred Smith",
            position: " Chef Cook",
            desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        },
        {
            img: chef4,
            name: " Antonio Santibanez",
            position: "Chef Cook",
            desc: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        },
    ];
    return (
        <React.Fragment>
            <section className="section-chef">
                <div className="main-title text-center center-title mb-5">
                    <h3 className="title__text" data-title="Chef">
                        Our Master Chef
                    </h3>
                </div>
                <Container>
                    <Row>
                        {chefs.map((chef, index) => {
                            return (
                                <Col
                                    lg={3}
                                    md={6}
                                    className="mb-5"
                                    key={Math.random() * Math.ceil(index + 1)}
                                >
                                    <div className="chef__item">
                                        <img
                                            className="chef__item-img"
                                            src={chef.img}
                                            alt="img-staff"
                                        />
                                        <div className="chef__item-information px-4 pb-4 pt-3">
                                            <h4 className="chef__item-name mb-2">
                                                {chef.name}
                                            </h4>
                                            <span className="chef__item-position">
                                                {chef.position}
                                            </span>
                                            <p className="chef__item-desc mt-3">
                                                {chef.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Chef;
