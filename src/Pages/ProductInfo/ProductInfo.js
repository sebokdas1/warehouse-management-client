import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Shared/Title/Title';

const ProductInfo = () => {
    const { productId } = useParams();
    return (
        <div>
            <Title title="Details"></Title>
            <h2>Product info for : {productId}</h2>
        </div>
    );
};

export default ProductInfo;