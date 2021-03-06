import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product'

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(product => product.key === productKey);

    return (
        <div>
            <Product product={product} showAddToCart={false} />
        </div>
    );
};

export default ProductDetails;