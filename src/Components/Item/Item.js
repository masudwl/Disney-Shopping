import React from 'react';
import data from '../../data/data';
import './Item.css';
import {useState} from 'react';
import Products from '../../Components/Products/Product';
import Cart from '../Cart/Cart';

const Item = (props) => {
    const [products, setProducts] = useState(data);

    const [cart, setCart] = useState([]);
    const btnHand = (pd)=> {
        const newCart = [...cart, pd]; 
        setCart(newCart); 
    }
    return (
        <div className="item-container">
            <div className="single-item">
                {
                    products.map(pd => <Products btnHand ={btnHand} pd={pd}></Products>)
                }
                    
            </div>
            <div className="caluculate single">
               <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Item;