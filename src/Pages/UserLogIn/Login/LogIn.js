import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './LogIn.css';
import auth from '../../../firebase.init';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import { async } from '@firebase/util';

const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorMessage;
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    if (error) {
        if (error?.message === "Firebase: Error (auth/user-not-found).") {
            errorMessage = <p className='text-danger text-center'>User not found Please Register</p>

        }
        if (error?.message === "Firebase: Error (auth/wrong-password).") {
            errorMessage = <p className='text-danger text-center'>wrong password! Please enter valid password</p>

        }

        else {
            errorMessage = <p className='text-danger text-center'>Error: {error?.message}</p>

        }
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='login-container mx-auto'>
            <form onSubmit={handleLogIn}>
                <h2 className='text-center'>Please login</h2>

                <p>Dosen't have an account yet? <Link to="/register" className='register'>Register</Link></p>

                <label htmlFor="email">Email Address</label>
                <input ref={emailRef} type="email" id="email" name="email" placeholder="you@example.com" required />

                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" id="password" name="password" placeholder="Enter 6 character or more" required />
                {errorMessage}
                <p>Forget Password? <Link to="/register" onClick={resetPassword}> reset password</Link></p>
                <input type="submit" value="Login" />
            </form>
            <SocialMediaLogin />
        </div>
    );
};

export default LogIn;