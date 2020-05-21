import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let price = 0; 
    for (let i = 0; i < cart.length; i++) {
        const pd = cart[i];
        price = price + pd.price; 
        
    }
    let tax = price / 10; 
    let total = price + tax; 
    return (
        <div className="cart-content">
            <h1>Shopping Summary</h1>
            <p>Order Quantity: {cart.length}</p>
            <p>Price : {price}</p>
            <p>Tax : {tax}</p>
            <p>Total Amount: {total} </p>
            <button className="btn"><FontAwesomeIcon icon={faShoppingBag} /> Checkout</button>
        </div>
    );
};

export default Cart;