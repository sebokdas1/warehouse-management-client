import React from 'react';
import useEquipments from '../../Shared/useEquipments/useEquipments';
import Equipment from '../Equipment/Equipment';
import './Equipments.css'

const Equipments = () => {
    const [products] = useEquipments([]);
    console.log(products.length)
    return (
        <div className='container'>
            <div className='mt-5 mb-3 our-equipments'>
                <h2 className='text-center '>Products</h2>
                <div className='empty mx-auto'></div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                {
                    products.slice(0, 6).map(product => <Equipment key={product.id}
                        product={product}
                    ></Equipment>)
                }
            </div>
        </div>
    );
};

export default Equipments;