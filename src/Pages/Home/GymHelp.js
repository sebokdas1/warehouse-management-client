import React from 'react';
import Weight from '../../Assets/wloss.png'
import Muscles from '../../Assets/muscles.png'
import Diabetis from '../../Assets/diabetis.png'
import Blood from '../../Assets/blood.png'
import Backpain from '../../Assets/backpain.png'
import Osteo from '../../Assets/osteo.png'
import './GymHelp.css'

const GymHelp = () => {
    return (
        <div className='container-fluid gymHelpContainer'>
            <h1>FIT WITH GYM EMS PERSONAL FITNESS TRAINING</h1>
            <h2>WILL HELP YOU WITH</h2>
            <div className='row helpBody'>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src={Weight} alt="" />
                    <h5>Weight loss</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src={Muscles} alt="" />
                    <h5>Build muscles</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src={Diabetis} alt="" />
                    <h5>Diabetes</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src={Blood} alt="" />
                    <h5>Blood Circulation</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src={Backpain} alt="" />
                    <h5>Back Pain</h5>
                </div>
                <div className='col-6 col-md-2'>
                    <img className='img-fluid' src={Osteo} alt="" />
                    <h5>Osteoporosis</h5>
                </div>
            </div>
        </div>
    );
};

export default GymHelp;