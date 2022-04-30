import React from 'react';
import Equipments from './Equipments/Equipments';
import GymHelp from './GymHelp';

const Home = () => {
    return (
        <div>
            <img width="100%" src="https://media.timeout.com/images/101706337/750/422/image.jpg" alt="" />



            <Equipments />

            <GymHelp />

            {/* <div className='w-50'>
                <iframe src="https://player.vimeo.com/video/537638649?h=745432204f" width="100%" height="400" allow="autoplay fullscreen picture-in-picture" allowfullscreen></iframe>
            </div> */}

        </div>
    );
};

export default Home;