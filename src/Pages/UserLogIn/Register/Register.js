import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleRegister = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/');
    }
    return (
        <div className='login-container mx-auto mt-5 mb-5'>
            <form onSubmit={handleRegister}>
                <h2 className='text-center'>Please Register</h2>

                <p>Already have an account? <Link to="/login" className='register'>Login</Link></p>

                <label htmlFor="ntext">Name</label>
                <input ref={nameRef} type="text" id="ntext" name="name" placeholder="Enter your full name" />

                <label htmlFor="email">Email Address</label>
                <input ref={emailRef} type="email" id="email" name="email" placeholder="you@example.com" required />

                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" id="password" name="password" placeholder="Enter 6 character or more" required />

                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;