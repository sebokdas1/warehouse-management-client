import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useEquipments from '../../Shared/useEquipments/useEquipments';
import Equipment from '../Equipment/Equipment';
import './Equipments.css'
import { Link } from 'react-router-dom';
import Title from '../../Shared/Title/Title';

const Equipments = () => {
    const [products] = useEquipments([]);
    console.log(products.length)
    return (
        <div className='container equipments-container'>
            <Title title="Equipments"></Title>
            <div className='mt-5 mb-3 our-equipments'>
                <h2 className='text-center '>Products</h2>
                <div className='empty mx-auto'></div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                {
                    products.map(product => <Equipment key={product.id}
                        product={product}
                    ></Equipment>)
                }
            </div>
            <Link to="equipments" className='show-more'>Show All <span className='arrow-icon'><FontAwesomeIcon icon={faArrowRightLong} /></span></Link>
        </div>
    );
};

export default Equipments;