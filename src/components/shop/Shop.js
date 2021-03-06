import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(exstingKey => {
            const product = fakeData.find(pd => pd.key === exstingKey);
            product.quantity = saveCart[exstingKey];
            return product;
        })
        setCart(previousCart);
    }, [])

    const addProductHandler = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }


        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (

        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product addProductHandler={addProductHandler} showAddToCart={true} product={product} key={product.key} />)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="add-cart-btn">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;