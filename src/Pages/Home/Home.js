import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Shared/Title/Title';
import WhyChoose from '../WhyChoose/WhyChoose';
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
            <p className='container home-manageLink'><Link to="/manage-item">Manage Items</Link></p>
            <WhyChoose />
            <GymHelp />

        </div>
    );
};

export default Home;