import React from 'react';
import Banner from './Banner';
import Equipments from './Equipments/Equipments';
import GymHelp from './GymHelp';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner />
            <Equipments />
            <GymHelp />

        </div>
    );
};

export default Home;