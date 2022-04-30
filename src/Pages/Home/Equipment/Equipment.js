import React from 'react';
import './Equipment.css'

const Equipment = ({ product }) => {
    const { name, description, img, price, supplier, quantity } = product;
    return (
        <div className='col'>
            <div className="card">
                <img src={img} className="mx-auto card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title title">{name.slice(0, 25)}</h5>
                    <p className="card-text descriptions">{description.slice(0, 59)}</p>
                    <div className='product-details'>
                        <p>supplier: {supplier}</p>
                        <p>price: ${price}</p>
                        <p>quantity: {quantity}<small>pcs</small></p>
                    </div>
                    <button className='update-btn'>Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default Equipment;