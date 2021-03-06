import React from 'react';


const Cart = (props) => {
    const { cart } = props;

    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    // console.log(total);

    let shipping = (cart.length === 0) ? 0 : 12.99;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }

    let tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Ordered Items: {cart.length}</p>
            <p>Item Price: ${total}</p>
            <p><small>Shipping Cost: $ {shipping}</small></p>
            <p>Tax+ VAT: ${tax}</p>
            <p>Total Price: ${grandTotal}</p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;