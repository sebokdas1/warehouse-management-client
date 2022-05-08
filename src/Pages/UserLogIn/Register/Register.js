import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import Title from '../../Shared/Title/Title';

const Register = () => {
    const [accept, setAccept] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (loading) {
        return <LoadingSpinner />
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);

    }

    if (user) {
        navigate('/');

    }
    return (

        <div className='register-container mx-auto'>
            <Title title="Register"></Title>
            <form onSubmit={handleRegister}>
                <h2 className='text-center'>Please Register</h2>

                <p>Already have an account? <Link to="/login" className='register'>Login</Link></p>

                <label htmlFor="ntext">Name</label>
                <input ref={nameRef} type="text" id="ntext" name="name" placeholder="Enter your full name" />

                <label htmlFor="email">Email Address</label>
                <input ref={emailRef} type="email" id="email" name="email" placeholder="you@example.com" required />

                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" id="password" name="password" placeholder="Enter 6 character or more" required />

                <input onClick={() => setAccept(!accept)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${accept ? '' : 'text-danger'}`} htmlFor="terms">Accept Nutrio <span>Terms</span></label>


                <input disabled={!accept} type="submit" value="Register" />
            </form>
            <SocialMediaLogin />
        </div>

    );
};

export default Register;