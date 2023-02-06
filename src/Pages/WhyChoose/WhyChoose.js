import React from 'react';
import Img1 from '../../Assets/img1.png'
import Img2 from '../../Assets/img2.png'
import Img3 from '../../Assets/img3.png'
import Img4 from '../../Assets/img4.png'
import './WhyChoose.css';

const WhyChoose = () => {
    return (
        <div className='whyC-main'>
            <h1 className='text-center pt-5 text-white'>WHY CHOOSE US</h1>
            <div className=' container mx-auto main-row-container'>
                <div className=' text-center'>
                    <img src={Img1} alt="" />
                    <h2>Competitive Price</h2>
                    <p>Wavar fitness equipment can compete and replace the global top brands with a more reasonable price.</p>
                </div>
                <div className=' text-center'>
                    <img src={Img2} alt="" />
                    <h2>Better User Experience</h2>
                    <p>Wavar fitness equipment iswell-designed, which can bringyour clients a good experience.</p>
                </div>
                <div className='text-center'>
                    <img src={Img3} alt="" />
                    <h2>OEM & ODM & Customized</h2>
                    <p>Our products can be customized according to customer demand, also accept OEM/ODM. Wavar has over 10 years manufacturing experience that</p>
                </div>
                <div className=' text-center'>
                    <img src={Img4} alt="" />
                    <h2>Most Innovative Designers</h2>
                    <p>Wavar has the most innovative designers in this industry to launch new designs that are unique in the market. Wavar senses the trend of</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;