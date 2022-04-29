import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faLinkedinIn, faGithub)
const Footer = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h2>name</h2>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Goldighi, Sadar Upozilla, Cox's Bazar</p>
                    <p><FontAwesomeIcon icon={faMailBulk} /> Official: sebok.das.ff@gmail.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> Helpline: 01730661569</p>
                </div>
                <div className='col-md-4 aboutSection'>
                    <h2 className='about'>About us</h2>
                    <p className='about'>Refund policy</p>
                    <p className='about'>Terms and Conditions</p>
                    <p className='about'>Privacy Policy</p>
                </div>
                <div className='col-md-4 socialIcons'>


                    <a href="https://web.facebook.com/sebokdasbd"><FontAwesomeIcon icon={faFacebookF} /></a>

                    <a href="https://github.com/sebokdas1"> <FontAwesomeIcon icon={faGithub} /></a>

                    <a href="https://github.com/sebokdasbd"> <FontAwesomeIcon icon={faLinkedinIn} /></a>

                </div>
            </div>
            <p className='text-center'><small>copyright &copy; 2022</small></p>
        </div>
    );
};

export default Footer;