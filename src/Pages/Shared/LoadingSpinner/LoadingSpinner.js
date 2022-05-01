import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className='loading-spinner'>
            <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default LoadingSpinner;