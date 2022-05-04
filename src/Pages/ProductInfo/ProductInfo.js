import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import Title from '../Shared/Title/Title';
import './ProductInfo.css';

const ProductInfo = () => {
    const quantityRef = useRef(1);
    const { productId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    const deleverItem = () => {
        const previousItemQuantity = parseInt(item.quantity);
        const quantity = previousItemQuantity - 1;
        const newDeleverItem = { quantity };
        const url = `http://localhost:5000/item/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDeleverItem)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        toast('1 Item delevered');
    }

    const addNewItem = e => {
        //stop page reload when form submitted.
        e.preventDefault();

        //sum previous and current quantity
        const preQuantity = parseInt(item.quantity);
        const newQuantity = parseInt(quantityRef.current.value);
        const quantity = preQuantity + newQuantity;

        //wrap input data to item object.
        const newitem = { quantity }

        //post input data to database
        const url = `http://localhost:5000/item/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newitem)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        toast(`successfully added ${newQuantity} stock quantity`)
        e.target.reset();
    }
    // < LoadingSpinner />
    return (
        <div className='container mt-2 info-main-div'>
            <h2 className='text-center'>Product Details</h2>
            <div className='empty-extra mx-auto'></div>

            <Title title="Details"></Title>
            <div className='Sproduct-details'>
                <img src={item.img} alt="" />
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
                    <button onClick={() => deleverItem()} className='delevered-btn'>Deleverd</button>
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