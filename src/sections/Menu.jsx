import React from "react";
import { Col, Row, Container } from "react-bootstrap";

// Get All Imgs
import breakfast1 from "../assets/images/menu/breakfast-1.webp";
import breakfast2 from "../assets/images/menu/breakfast-2.webp";
import breakfast3 from "../assets/images/menu/breakfast-3.webp";

import lunch1 from "../assets/images/menu/lunch-1.webp";
import lunch2 from "../assets/images/menu/lunch-2.webp";
import lunch3 from "../assets/images/menu/lunch-3.webp";

import dinner1 from "../assets/images/menu/dinner-1.webp";
import dinner2 from "../assets/images/menu/dinner-2.webp";
import dinner3 from "../assets/images/menu/dinner-3.webp";

import dessert1 from "../assets/images/menu/dessert-1.webp";
import dessert2 from "../assets/images/menu/dessert-2.webp";
import dessert3 from "../assets/images/menu/dessert-3.webp";

import wine1 from "../assets/images/menu/wine-1.webp";
import wine2 from "../assets/images/menu/wine-2.webp";
import wine3 from "../assets/images/menu/wine-3.webp";

import drink1 from "../assets/images/menu/drink-1.webp";
import drink2 from "../assets/images/menu/drink-2.webp";
import drink3 from "../assets/images/menu/drink-3.webp";

const Menu = () => {
    const menuLis = [
        {
            type: "breakfast",
            meals: [
                {
                    id: 1,
                    img: breakfast1,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 2,
                    img: breakfast2,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 3,
                    img: breakfast3,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
            ],
        },
        {
            type: "lunch",
            meals: [
                {
                    id: 1,
                    img: lunch1,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 2,
                    img: lunch2,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 3,
                    img: lunch3,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
            ],
        },
        {
            type: "dinner",
            meals: [
                {
                    id: 1,
                    img: dinner1,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 2,
                    img: dinner2,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 3,
                    img: dinner3,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
            ],
        },
        {
            type: "dessert",
            meals: [
                {
                    id: 1,
                    img: dessert1,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 2,
                    img: dessert2,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 3,
                    img: dessert3,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
            ],
        },
        {
            type: "wine Card",
            meals: [
                {
                    id: 1,
                    img: wine1,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 2,
                    img: wine2,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 3,
                    img: wine3,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
            ],
        },
        {
            type: "drink",
            meals: [
                {
                    id: 1,
                    img: drink1,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 2,
                    img: drink2,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
                {
                    id: 3,
                    img: drink3,
                    title: "Beef RoastSource",
                    desc: "Meat, Potatoes, Rice, Tomatoe",
                    price: "$29",
                },
            ],
        },
    ];

    return (
        <React.Fragment>
            <section className="section-menu">
                <div className="main-title text-center center-title">
                    <h3 className="title__text mb-5" data-title="Specialties">
                        Our Menu
                    </h3>
                </div>
                <Container>
                    <Row>
                        {menuLis.map((item, index) => {
                            return (
                                <React.Fragment
                                    key={Math.random() * Math.ceil(index + 1)}
                                >
                                    <Col
                                        className="mb-4"
                                        lg={4}
                                        md={6}
                                        key={
                                            Math.random() * Math.ceil(index + 1)
                                        }
                                    >
                                        <div className="section-menu__item px-lg-4 px-2 py-5 d-flex flex-column">
                                            <h4 className="section-menu__item-title text-uppercase text-center mb-5">
                                                {item.type}
                                            </h4>
                                            {item.meals.map((meal) => {
                                                return (
                                                    <div
                                                        key={
                                                            Math.random() *
                                                            Math.ceil(index + 1)
                                                        }
                                                        className="section-menu__item-box d-flex"
                                                    >
                                                        <img
                                                            className="section-menu__item__img"
                                                            src={meal.img}
                                                            alt="img-BREAKFAST"
                                                        />
                                                        <div className="section-menu__item__desc">
                                                            <h5 className="section-menu__item__desc-title mb-2">
                                                                {meal.title}
                                                            </h5>
                                                            <p>{meal.desc}</p>
                                                        </div>
                                                        <h6 className="section-menu__item__price main-color">
                                                            {meal.price}
                                                        </h6>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </Col>
                                </React.Fragment>
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Menu;
