import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import { Link } from 'react-router-dom';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faLinkedinIn, faGithub)
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Link className='siteName' to="/home">NUTRIO</Link>
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
                        <img className='w-100 mx-auto mt-2' src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                    </div>
                </div>
                <p className='text-center'><small>copyright &copy; {year}</small></p>
            </div>
        </div>
    );
};

export default Footer;