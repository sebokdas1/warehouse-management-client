import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import Title from '../Shared/Title/Title';
import './ProductInfo.css';

const ProductInfo = () => {
    const quantityRef = useRef(1);
    const { productId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://warehouse-management-server-llb7.onrender.com/item/${productId}`;
        <LoadingSpinner />
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]);

    const deleverItem = () => {
        let quantity;
        const previousItemQuantity = parseInt(item.quantity);

        if (previousItemQuantity === 1) {
            quantity = 'sold out';
        }
        else if (item.quantity === 'sold out') {
            quantity = 'sold out';
        }
        else {
            quantity = previousItemQuantity - 1;
        }
        const newDeleverItem = { quantity };

        const url = `https://warehouse-management-server-llb7.onrender.com/item/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDeleverItem)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        setItem(newDeleverItem)
        toast(`${item.name} delivered successfully`);
    }

    const addNewItem = e => {
        //stop page reload when form submitted.
        e.preventDefault();
        let quantity;
        const preQuantity = parseInt(item.quantity);
        const newQuantity = parseInt(quantityRef.current.value);

        if (item.quantity === 'sold out') {
            quantity = parseInt(quantityRef.current.value);
        }
        else {
            quantity = preQuantity + newQuantity;
        }

        //wrap input data to item object.
        const newitem = { quantity }

        //post input data to database
        const url = `https://warehouse-management-server-llb7.onrender.com/item/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newitem)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        setItem(newitem)
        toast(`successfully added ${newQuantity} stock quantity`)
        e.target.reset();
    }

    return (
        <div className='container mt-2 info-main-div'>
            <p className='manageItem'><Link to="/manage-item">Manage Items</Link></p>
            <h2 className='text-center'>Product Details</h2>
            <div className='empty-extra mx-auto'></div>

            <Title title="Details"></Title>
            <h5 className='text-center mt-2'>Product id: {item._id}</h5>
            <div className='Sproduct-details'>
                <img height="280px" width="280px" src={item.img} alt="" />
                <div className='info-section'>
                    <h3>{item.name}</h3>
                    <p className='short-descrip'>{item.description}</p>
                    <h6>supplier: {item.supplier}</h6>
                    <div className='price-stock'>
                        <h6>price: ${item.price}</h6>
                        <h6>stock: {item.quantity}</h6>
                    </div>
                </div>
            </div>

            <div className='delevered-restock'>
                <div>
                    <button onClick={() => deleverItem()} className='delevered-btn'>Delivered</button>
                </div>

                <div className='restock-field'>
                    <form onSubmit={addNewItem}>
                        <label htmlFor="restock">Re-Stock:</label>
                        <input ref={quantityRef} placeholder='25' type="number" id='restock' required />

                        <button type='submit' className='restock-btn'>Restock</button>
                    </form>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductInfo;