import React, { useRef } from 'react';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import './Reset.css'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';


const Reset = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const resetPasswordLink = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset Mail Send');
        } else {
            toast('Please enter your email address')
        }

    }
    return (
        <div>
            <div className='reset-container'>
                <h2 className='text-center'>Forgot Password ?</h2>
                <p>Don't worry! Enter your email below and we'll email you a link to reset your password. </p>
                <form onSubmit={resetPasswordLink}>
                    <label htmlFor="Email">Email Address</label>
                    <input ref={emailRef} type="email" id='Email' placeholder='you@example.com' />
                    <input type="submit" value="Reset" />
                </form>
            </div>


            <ToastContainer />
        </div>
    );
};

export default Reset;