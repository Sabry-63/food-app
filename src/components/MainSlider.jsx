import React from 'react';
import { Carousel } from 'react-bootstrap';
import ImgSlider1 from '../assets/images/header/wallpaper1.webp';
import ImgSlider2 from '../assets/images/header/wallpaper2.webp';

const MainSlider = () => {
    return (
        <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ImgSlider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <span>teste.it Reservation</span>
                        <h1>Beat Quality</h1>
                        <span>Food</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ImgSlider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <span>teste.it Reservation</span>
                        <h1>Cooking Since</h1>
                        <span>1958</span>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    );
};

export default MainSlider;
