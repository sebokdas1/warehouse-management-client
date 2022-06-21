import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import './RequireAuth.css'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading || sending) {
        return <LoadingSpinner />
    }
    if (error) {
        console.log(error?.message)
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='verification-container'>
            <h5>Verify Your Email Address</h5>
            <p>Before proceeding, please check your email for a verification link. If you did not receive the email,</p>
            <p className='link-paragraph'>
                <span
                    className='verify-link'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Verification Mail Send');
                    }}
                >click here to request another.</span>
            </p>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;