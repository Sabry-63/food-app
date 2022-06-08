import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Zoom, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Import Img Slider
import wallpaper1 from '../assets/images/header/wallpaper1.webp';
import wallpaper2 from '../assets/images/header/wallpaper2.webp';

const headerItems = [
    {
        img: wallpaper1,
        title: 'Beat Quality',
        subTitle: 'Food',
    },
    {
        img: wallpaper2,
        title: 'Cooking Since',
        subTitle: '1958',
    },
];

const Sliderheader = () => {
    return (
        <header className="main-header">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[EffectFade, Zoom, Pagination, A11y, Autoplay]}
                effect="fade"
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {headerItems.map((item, index) => {
                    return (
                        <SwiperSlide key={Math.random() * Math.ceil(index + 1)}>
                            <div className="header__item">
                                <div className="header__item-content">
                                    <span className="text-uppercase">
                                        teste.it Reservation
                                    </span>
                                    <h1 className="my-4">{item.title}</h1>
                                    <span className="text-uppercase">
                                        {item.subTitle}
                                    </span>
                                </div>
                                <img
                                    src={item.img}
                                    alt="img-slider"
                                    className="w-100"
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </header>
    );
};

export default Sliderheader;
