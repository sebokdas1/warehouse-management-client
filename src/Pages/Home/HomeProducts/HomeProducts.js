import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
// import useEquipments from '../../Shared/useEquipments/useEquipments';
import Equipment from '../Equipment/Equipment';
import { Link } from 'react-router-dom';
import './HomeProducts.css';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { useQuery } from 'react-query';


const HomeProducts = () => {
    // const [products] = useEquipments([]);
    const { data: products, isLoading } = useQuery('item', () => fetch('https://warehouse-management-server-llb7.onrender.com/item').then(res => res.json()));

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className='container equipments-container'>

            <div className='mt-5 mb-3 our-equipments'>
                <h2 className='text-center '>Products</h2>
                <div className='empty mx-auto'></div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                {
                    products ?


                        products.slice(0, 6).map(product => <Equipment key={product._id}
                            product={product}
                        ></Equipment>)
                        : <LoadingSpinner />}

            </div>
            <Link to="equipments" className='show-more'>Show All <span className='arrow-icon'><FontAwesomeIcon icon={faArrowRightLong} /></span></Link>
        </div>
    );
};

export default HomeProducts;