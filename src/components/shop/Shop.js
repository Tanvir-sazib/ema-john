import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shop.css'
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const addProductHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (

        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product addProductHandler={addProductHandler} product={product} />)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;