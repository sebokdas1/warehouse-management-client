import React from 'react';
import './GymHelp.css'

const GymHelp = () => {
    return (
        <div className='container-fluid gymHelpContainer'>
            <h1>FIT WITH GYM EMS PERSONAL FITNESS TRAINING</h1>
            <h2>WILL HELP YOU WITH</h2>
            <div className='row helpBody'>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src="https://fitintimedubai.com/assets/imgmin/fit_01.png" alt="" />
                    <h5>Weight loss</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src="https://fitintimedubai.com/assets/imgmin/fit_02.png" alt="" />
                    <h5>Build muscles</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src="https://fitintimedubai.com/assets/imgmin/fit_03.png" alt="" />
                    <h5>Diabetes</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src="https://fitintimedubai.com/assets/imgmin/fit_04.png" alt="" />
                    <h5>Blood Circulation</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src="https://fitintimedubai.com/assets/imgmin/fit_05.png" alt="" />
                    <h5>Back Pain</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src="https://fitintimedubai.com/assets/imgmin/fit_06.png" alt="" />
                    <h5>Osteoporosis</h5>
                </div>
            </div>
        </div>
    );
};

export default GymHelp;