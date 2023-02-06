import React from 'react';
import useEquipments from '../Shared/useEquipments/useEquipments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './ManageItems.css'


const ManageItems = () => {
    const [products, setProducts] = useEquipments([]);

    const deleteItem = id => {
        const Confirm = window.confirm('Are you sure, you want to delete?');
        if (Confirm) {
            const url = `https://warehouse-management-server-llb7.onrender.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                });
        }

    }



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
                        products.map(product => <tbody key={product._id}>
                            <tr>

                                <td><img width="60vh" src={product.img} alt="" /></td>
                                <td>{product.name.slice(0, 15)}</td>
                                <td>{product.price}</td>
                                <td><FontAwesomeIcon onClick={() => deleteItem(product._id)} className='dlt-icon' icon={faTrashCan} /></td>
                            </tr>
                        </tbody>)

                    }

                </table>
            </div>
        </div>
    );
};

export default ManageItems;