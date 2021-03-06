import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (

        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-title">
                <h4><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p>By: <small>{seller}</small></p>
                <p><small>Price: ${price}</small></p>
                <p><small>Only {stock} left - oreder soon</small></p>
                {props.showAddToCart && <button onClick={() => props.addProductHandler(props.product)} className="add-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div >


    );
};

export default product;