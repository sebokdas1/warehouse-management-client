import React, { useRef } from 'react';


const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLogIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }
    return (
        <div>
            <form onSubmit={handleLogIn}>
                <h2 className='text-center'>Please login</h2>

                <p>Dosen't have an account yet? <Link to="/register" className='register'>Register</Link></p>

                <label htmlFor="email">Email Address</label>
                <input ref={emailRef} type="email" id="email" name="email" placeholder="you@example.com" required />

                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" id="password" name="password" placeholder="Enter 6 character or more" required />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Register;