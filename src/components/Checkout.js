import React, {setState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Checkout = ({cartItems, sumtotal, setSumtotal}) => {

    useEffect(()=>{
        cartItems.map(item=>setSumtotal(prev=>prev+parseFloat(item.price)));

        return () => setSumtotal(0)
    },[])

    return (
        <div className='cart-panel'>
            <div className="checkout-panel-items">
                <h2 style={{textAlign:'center'}}>Your shopping cart</h2>
                <div className='checkout-items'>
                {cartItems.map(item=>{
                        return (
                            <div className='checkout-items-text'>
                                <span>{item.name} </span>
                                <span>${item.price}</span>
                            </div>
                        )
                })}
                </div>
            </div>
            <h2 className='checkout-items-text'><span>Total:</span> <span>$ {sumtotal}</span></h2>
            <div className="cart-panel-buttons">
                <button className='add-to-cart-btn'>Checkout</button>
                <span><Link to='/candy-store' style={{textDecoration:'underline', color: 'black'}} >Go back</Link></span>
            </div>
        </div>
    )
}

export default Checkout