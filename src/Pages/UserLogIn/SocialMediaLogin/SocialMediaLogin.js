import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialMediaLogin.css'

const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);

    let errorMessage;
    if (error || error1) {
        if (error?.message || error1?.message === "Firebase: Error (auth/popup-closed-by-user).") {
            errorMessage = <div>
                <p className='text-danger text-center'>Sign in Cancelled by User</p>
            </div>
        }
        else {
            errorMessage = <div>
                <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
            </div>
        }
    }

    if (user || user1) {
        navigate('/');
    }
    return (
        <div className='social-div'>
            <div className='row align-items-center '>
                <div className='col-md-4 media-empty-div'></div>
                <p className='col-md-4 text-center mt-2'>or login with</p>
                <div className='col-md-4 media-empty-div'></div>
            </div>
            {errorMessage}
            <div className='d-md-flex justify-content-evenly icon-btn'>
                <div>
                    <button onClick={() => signInWithGoogle()} className='socialSignbtn googleSignBTN'> <img className='google-logo' src="https://i.ibb.co/TLk45TZ/google-logo.png" alt="" /> <span className='google'>Google</span></button>
                </div>
                <div>
                    <button onClick={() => signInWithFacebook()} className='socialSignbtn facebookSignBTN'><img className='facebook-logo' src="https://i.ibb.co/zQ1Z9kN/facebook-logo.png" alt="" /> <span className='facebook'>Facebook</span></button>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaLogin;