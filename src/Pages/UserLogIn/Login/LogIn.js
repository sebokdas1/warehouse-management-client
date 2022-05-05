import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './LogIn.css';
import auth from '../../../firebase.init';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import 'react-toastify/dist/ReactToastify.css';
import Title from '../../Shared/Title/Title';

const LogIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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


    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        if (error?.message === "Firebase: Error (auth/user-not-found).") {
            errorMessage = <p className='text-danger text-center'>User not found Please Register</p>

        }
        else if (error?.message === "Firebase: Error (auth/wrong-password).") {
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
            <Title title="login"></Title>
            <form onSubmit={handleLogIn}>
                <h2 className='text-center'>Please login</h2>

                <p>Dosen't have an account yet? <Link to="/register" className='register'>Register</Link></p>

                <label htmlFor="email">Email Address</label>
                <input ref={emailRef} type="email" id="email" name="email" placeholder="you@example.com" required />

                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" id="password" name="password" placeholder="Enter 6 character or more" required />
                {errorMessage}
                <p className='reset-link' >Forget Password? <Link to="/reset-password" > reset password</Link></p>
                <input type="submit" value="Login" />
            </form>
            <SocialMediaLogin />
        </div>
    );
};

export default LogIn;