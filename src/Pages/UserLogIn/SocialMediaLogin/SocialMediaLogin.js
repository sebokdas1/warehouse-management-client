import React from 'react';
import './SocialMediaLogin.css'

const SocialMediaLogin = () => {
    return (
        <div className='social-div'>
            <div className='row align-items-center '>
                <div className='col-md-4 media-empty-div'></div>
                <p className='col-md-4 text-center mt-2'>or login with</p>
                <div className='col-md-4 media-empty-div'></div>
            </div>
            <div className='d-md-flex justify-content-evenly icon-btn'>
                <div>
                    <button className='socialSignbtn googleSignBTN'> <img className='google-logo' src="https://i.ibb.co/TLk45TZ/google-logo.png" alt="" /> <span className='google'>Google</span></button>
                </div>
                <div>
                    <button className='socialSignbtn facebookSignBTN'><img className='facebook-logo' src="https://i.ibb.co/zQ1Z9kN/facebook-logo.png" alt="" /> <span className='facebook'>Facebook</span></button>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaLogin;