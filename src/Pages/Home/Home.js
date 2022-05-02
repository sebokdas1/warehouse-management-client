import React from 'react';
import Title from '../Shared/Title/Title';
import Banner from './Banner';
import Equipments from './Equipments/Equipments';
import GymHelp from './GymHelp';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Title title="Home"></Title>
            <Banner />
            <Equipments />
            <GymHelp />

        </div>
    );
};

export default Home;