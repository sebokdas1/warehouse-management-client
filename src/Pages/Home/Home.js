import React from 'react';
import Title from '../Shared/Title/Title';
import Banner from './Banner';
import GymHelp from './GymHelp';
import './Home.css'
import HomeProducts from './HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Title title="Home"></Title>
            <Banner />
            <HomeProducts />
            <GymHelp />

        </div>
    );
};

export default Home;