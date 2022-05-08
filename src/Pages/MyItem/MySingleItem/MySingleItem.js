import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './MySingleItem.css';
const MySingleItem = ({ item, deleteItem }) => {
    const { _id, img, name, price, description, quantity, supplier } = item;

    return (
        <div className='col'>
            <div className="card equipment-cont">
                <img src={img} className="mx-auto card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title title">{name.slice(0, 25)}</h5>
                    <p className="card-text descriptions">{description.slice(0, 59)}</p>
                    <div className='product-details'>
                        <p>supplier: {supplier}</p>
                        <p>price: ${price}</p>
                        <p>stock: {quantity}</p>
                    </div>
                    <button onClick={() => deleteItem(_id)} className='update-btn'>Delete <span className='ms-2 text-danger'><FontAwesomeIcon icon={faTrashCan} /></span></button>
                </div>
            </div>
        </div>
    );
};

export default MySingleItem;