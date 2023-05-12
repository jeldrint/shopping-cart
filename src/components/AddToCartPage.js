import React, {useState} from "react";
import '../styles/AddToCartPage.css'
import {Link} from 'react-router-dom'

const AddToCartPage = ({candy, setCartItemCount}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const quantity = (e) => {
        setTotalPrice((e.target.value * candy[0].price).toFixed(2));
    }

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
            <div className="cart-panel-qty">
                <label for='qty'>Qty:</label>
                <input id='qty' type='number' style={{width: '40px'}} min='0' max='1000' onKeyDown= {e => e.code ==='Minus' && e.preventDefault()} 
                onChange={quantity}/>

                <span id='total-price'>Total Price: <strong>$ {totalPrice}</strong></span>
            </div>
            <div className="cart-panel-buttons">
                <button className='add-to-cart-btn' onClick={addToCart}>Add to Cart</button>
                <span><Link to='/candy-store' style={{textDecoration:'underline', color: 'black'}} >Go back</Link></span>
            </div>
        </div>
    )
}

export default AddToCartPage