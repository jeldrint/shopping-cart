import React, {useState} from "react";
import '../styles/AddToCartPage.css'
import {Link} from 'react-router-dom'

const AddToCartPage = ({candy, setCartItemCount, setCartItems}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [qty, setQty] = useState(0);
    

    const quantity = (e) => {
        setQty(e.target.value);
        setTotalPrice((e.target.value * candy[0].price).toFixed(2));
    }

    const addedToCart = () => {
        setCartItemCount(prevVal => prevVal +1);
        setCartItems(prev=>[...prev, {name: candy[0].name, quantity: qty, price: totalPrice}])
    }
    

    return (
        <div className='cart-panel'>
            <div className="cart-panel-items">
                <h1>{candy[0].name}</h1>
                <h4>{candy[0].description}</h4>
                <h2>$ {candy[0].price}</h2>
            </div>
            <div className="cart-panel-qty">
                <label>Qty:</label>
                <input id='qty' type='number' style={{width: '40px', fontSize: '14px'}} min='0' max='1000' onKeyDown= {e => e.code ==='Minus' && e.preventDefault()} 
                onChange={quantity}/>

                <span id='total-price'>Total Price: <strong>$ {totalPrice}</strong></span>
            </div>
            <div className="cart-panel-buttons">
                <button className='add-to-cart-btn' onClick={addedToCart}>Add to Cart</button>
                <span><Link to='/candy-store' style={{textDecoration:'underline', color: 'black'}} >Go back</Link></span>
            </div>
        </div>
    )
}

export default AddToCartPage