import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import blog1 from "../assets/images/blog/blog-1.webp";
import blog2 from "../assets/images/blog/blog-2.webp";
import blog3 from "../assets/images/blog/blog-3.webp";

const Blog = () => {
    const blogs = [
        {
            img: blog1,
            date: " AUGUST 3, 2020 ADMIN",
            desc: " Even the all-powerful Pointing has no control about the blind texts",
            link: "Read more",
            count: "3",
        },
        {
            img: blog2,
            date: " AUGUST 3, 2020 ADMIN",
            desc: " Even the all-powerful Pointing has no control about the blind texts",
            link: "Read more",
            count: "4",
        },
        {
            img: blog3,
            date: " AUGUST 3, 2020 ADMIN",
            desc: " Even the all-powerful Pointing has no control about the blind texts",
            link: "Read more",
            count: "5",
        },
    ];

    return (
        <React.Fragment>
            <section className="section-blog">
                <div className="main-title text-center center-title mb-5">
                    <h3 className="title__text" data-title="Blog">
                        Recent Blog
                    </h3>
                </div>
                <Container>
                    <Row>
                        {blogs.map((blog, index) => {
                            return (
                                <Col
                                    lg={4}
                                    className=" mb-4"
                                    key={Math.random() * Math.ceil(index + 1)}
                                >
                                    <div className="blog__item">
                                        <img
                                            className="blog__item-img"
                                            src={blog.img}
                                            alt="img-blog"
                                        />
                                        <div className="blog__item-information p-4">
                                            <span className="blog__item-information-date text-uppercase">
                                                {blog.date}
                                            </span>
                                            <p className="my-3 blog__item-information-desc">
                                                {blog.desc}
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <Link
                                                    className="btn main-btn"
                                                    to="#"
                                                >
                                                    {blog.link}
                                                </Link>
                                                <div className="blog__item-information-comment">
                                                    <span className="blog__item-information-icon me-1">
                                                        <i
                                                            className="fa fa-comment"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                    <span>{blog.count}</span>
                                                </div>
                                            </div>
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

export default Blog;
