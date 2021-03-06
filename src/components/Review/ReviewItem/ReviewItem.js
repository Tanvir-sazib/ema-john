import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key } = props.product;
    const { removeProduct } = props;

    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }

    return (
        <div style={reviewItemStyle} className="cartIetms">
            <div className="product-title">
                <h4 className="">{name}</h4>
                <p>quantity: {quantity}</p>
                <button
                    className="add-cart-btn"
                    onClick={() => removeProduct(key)}
                >
                    <strong>Remove</strong>
                </button>
            </div>
        </div>

    );
};

export default ReviewItem;