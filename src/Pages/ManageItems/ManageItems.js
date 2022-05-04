import React from 'react';
import useEquipments from '../Shared/useEquipments/useEquipments';
import ManageItem from './ManageItem/ManageItem';
import { Link } from 'react-router-dom';
import './ManageItems.css'

const ManageItems = () => {
    const [products] = useEquipments([]);

    return (
        <div className='manage-container'>
            <p className='add-newBTN'><Link to="/add-product">Add New Item</Link></p>
            <h2 className='text-center'>Manage Products</h2>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>

                    {
                        products.map(product => <ManageItem key={product._id} product={product} />)

                    }

                </table>
            </div>
        </div>
    );
};

export default ManageItems;