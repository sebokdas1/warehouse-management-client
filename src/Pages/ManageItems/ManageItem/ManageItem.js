import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './ManageItem.css'

const ManageItem = ({ product }) => {
    const { name, img, price } = product;
    return (



        <tbody>
            <tr>

                <td><img width="60vh" src={img} alt="" /></td>
                <td>{name.slice(0, 15)}</td>
                <td>{price}</td>
                <td><FontAwesomeIcon className='dlt-icon' icon={faTrashCan} /></td>
            </tr>
        </tbody>


    );
};

export default ManageItem;