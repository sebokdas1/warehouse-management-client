import React from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>Product info for : {productId}</h2>
        </div>
    );
};

export default ProductInfo;