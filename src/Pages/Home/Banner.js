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
                        // src="https://i.ibb.co/MNMkvB8/img-1-1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.gymwarehouse.co.uk/wp-content/uploads/2015/04/gymwarehouse-3.jpg"
                        // src="https://i.ibb.co/wd5bKmn/img-2-2.png"
                        alt="Second slide"

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.gymwarehouse.co.uk/wp-content/uploads/2015/04/gymwarehouse-2.jpg"
                        // src="https://i.ibb.co/XpGnBWd/img-3-3.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;