import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react"; // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import person from "../assets/images/coustmers/person-1.webp";

const Testmonial = () => {
    const customers = [
        {
            img: person,
            name: "John Gustavo",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            type: "Customer",
        },
        {
            img: person,
            name: "John Gustavo",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            type: "Customer",
        },
        {
            img: person,
            name: "John Gustavo",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            type: "Customer",
        },
        {
            img: person,
            name: "John Gustavo",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            type: "Customer",
        },
        {
            img: person,
            name: "John Gustavo",
            desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            type: "Customer",
        },
    ];

    return (
        <React.Fragment>
            <section className="section-customer">
                <div className="main-title text-center center-title">
                    <h3 className="title__text" data-title="Testimony">
                        Happy Customer
                    </h3>
                </div>
                <Container>
                    <Swiper
                        // install Swiper modules
                        modules={[
                            Navigation,
                            Pagination,
                            Scrollbar,
                            A11y,
                            Autoplay,
                        ]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {customers.map((customer, index) => {
                            return (
                                <SwiperSlide
                                    key={Math.random() * Math.ceil(index + 1)}
                                    className="py-5"
                                >
                                    <div className="customer__item text-center">
                                        <p className="customer__item-desc">
                                            {customer.desc}
                                        </p>
                                        <div className="customer__item-img mx-auto">
                                            <img
                                                className="mt-4"
                                                src={customer.img}
                                                alt={customer.type}
                                            />
                                            <span className="customer__item-icon">
                                                <i
                                                    className="fa fa-quote-left"
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                        </div>
                                        <span className="customer__item-name d-block mt-4">
                                            {customer.name}
                                        </span>
                                        <span className="customer__item-position d-block mt-2">
                                            {customer.type}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Testmonial;
