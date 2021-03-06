import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';
import happyImage from "../../images/giphy.gif"


const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);

    }, []);
    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImage} alt="" />
    }
    return (


        <div className='shop-container'>
            <div className='product-container'>
                <h1>Cart Items: {cart.length}</h1>
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} product={pd} key={pd.key} />)
                }
                {thankYou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="add-cart-btn">Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;