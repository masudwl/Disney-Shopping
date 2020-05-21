import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    const {name, price, img, brand} = props.pd; 
    return (
                  <div className="single">
                    <img src={img} alt=""/>
                    <div className="content">
                        <h2>{name}</h2>
                        <p>Brand:  {brand}</p>
                        <p>Price: $ {price}</p>
                        <button className="btn" onClick={()=> props.btnHand(props.pd)}><FontAwesomeIcon icon={faPlus} />  Add to Cart</button>
                    </div>
                </div>
    );
};

export default Product;