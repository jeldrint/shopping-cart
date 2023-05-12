import React from "react";
import '../styles/AddToCartPage.css'
import {Link} from 'react-router-dom'

const AddToCartPage = ({candy, setCartItemCount}) => {

    const addToCart = () => {
        setCartItemCount(prevVal => prevVal +1);
    }

    return (
        <div className='cart-panel'>
            <div className="cart-panel-items">
                <h1>{candy[0].name}</h1>
                <h4>{candy[0].description}</h4>
                <h2>$ {candy[0].price}</h2>
            </div>
            <div className="cart-panel-buttons">
                <button className='add-to-cart-btn' onClick={addToCart}>Add to Cart</button>
                <span><Link to='/candy-store' style={{textDecoration:'underline', color: 'black'}} >Go back</Link></span>
            </div>
        </div>
    )
}

export default AddToCartPage