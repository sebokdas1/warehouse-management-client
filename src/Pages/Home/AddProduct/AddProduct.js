import React, { useRef } from 'react';
import './AddProduct.css'

const AddProduct = () => {
    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const imgRef = useRef("");
    const supplierRef = useRef("");
    const stockRef = useRef(0);
    const priceRef = useRef(0);

    const handleAdd = e => {
        //stop page reload when form submitted.
        e.preventDefault();
        //get input data from input field
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;
        const supplier = supplierRef.current.value;
        const quantity = stockRef.current.value;
        const price = priceRef.current.value;

        //wrap input data to item object.
        const item = { img, name, description, price, supplier, quantity }

        //post input data to database
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='add-main-container'>
            <h2 className='text-center mt-1'>Add New Product</h2>
            <div className='Add-container'>
                <form onSubmit={handleAdd}>
                    <div className="row">
                        <div className="coll-25">
                            <label htmlFor="fname">Product Name</label>
                        </div>
                        <div className="coll-75">
                            <input ref={nameRef} type="text" id="fname" name="productName" placeholder="Product Name..." required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="coll-25">
                            <label htmlFor="Iurl">Image URL</label>
                        </div>
                        <div className="coll-75">
                            <input ref={imgRef} type="text" id="Iurl" name="imageURL" placeholder="photo url..." required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="coll-25">
                            <label htmlFor="supplier">Supplier</label>
                        </div>
                        <div className="coll-75">
                            <input ref={supplierRef} type="text" id="supplier" name="supplier" placeholder="supplier" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="coll-25">
                            <label htmlFor="price">Price(USD)</label>
                        </div>
                        <div className="coll-75">
                            <input ref={priceRef} type="number" id="price" name="price" placeholder="120" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="coll-25">
                            <label htmlFor="stock">Stock Quantity</label>
                        </div>
                        <div className="coll-75">
                            <input ref={stockRef} type="number" id="stock" name="stock" placeholder="100" required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="coll-25">
                            <label htmlFor="subject">Description</label>
                        </div>
                        <div className="coll-75">
                            <textarea ref={descriptionRef} id="subject" name="subject" placeholder="Write something about this product..." required />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <input type="submit" value="Add Item" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;