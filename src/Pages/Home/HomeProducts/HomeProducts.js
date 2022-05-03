import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import useEquipments from '../../Shared/useEquipments/useEquipments';
import Equipment from '../Equipment/Equipment';
import { Link } from 'react-router-dom';
import './HomeProducts.css';


const HomeProducts = () => {
    const [products] = useEquipments([]);
    return (
        <div className='container equipments-container'>

            <div className='mt-5 mb-3 our-equipments'>
                <h2 className='text-center '>Products</h2>
                <div className='empty mx-auto'></div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                {
                    products.slice(0, 6).map(product => <Equipment key={product._id}
                        product={product}
                    ></Equipment>)
                }
            </div>
            <Link to="equipments" className='show-more'>Show All <span className='arrow-icon'><FontAwesomeIcon icon={faArrowRightLong} /></span></Link>
        </div>
    );
};

export default HomeProducts;