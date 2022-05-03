import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Shared/Title/Title';

const ProductInfo = () => {
    const { productId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <Title title="Details"></Title>
            <h2>Product info for : {item.name}</h2>
        </div>
    );
};

export default ProductInfo;