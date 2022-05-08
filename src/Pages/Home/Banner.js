import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.gymwarehouse.co.uk/wp-content/uploads/2015/04/gymwarehouse-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.gymwarehouse.co.uk/wp-content/uploads/2015/04/gymwarehouse-3.jpg"
                        alt="Second slide"

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.gymwarehouse.co.uk/wp-content/uploads/2015/04/gymwarehouse-2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;