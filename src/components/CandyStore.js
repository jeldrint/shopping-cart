import React, { useEffect, useState } from "react";
import RenderItem from "./RenderItem";
import Cart from '../images/cart.png'
import AddToCartPage from "./AddToCartPage";
import {Link} from 'react-router-dom'

const CandyStore = () => {
    const [cartItems,setCartItems] = useState(0);
    const [cartAmount, setCartAmount] = useState(0);

    useEffect(()=>{
        const itemClick = (e) => {
            if(e.target.className === 'store-items' || e.target.parentNode.className === 'store-items'){
                setCartItems(prevVal => prevVal +1);
                <AddToCartPage />
            }else{
                e.preventDefault();
            }
        }
        document.addEventListener('click',itemClick);
        return () => document.removeEventListener('click',itemClick);
    },[])

    return (
        <>
            <div className="store-header">
                <h1 style={{margin: 0}}>
                    <Link to='/'>Candies be love</Link>
                </h1>
                <div className="cart">
                    <img src ={Cart} className="cart-logo"/>
                    <span className="cart-notif">{cartItems}</span>
                </div>
            </div>
            <div className="store-content">
                <RenderItem />
            </div>
        </>
    )
}

export default CandyStore