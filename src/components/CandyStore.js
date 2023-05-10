import React from "react";
import RenderItem from "./RenderItem";
import Cart from '../images/cart.png'

const CandyStore = () => {

    return (
        <>
            <div className="store-header">
                <h1 style={{margin: 0}}>Candies be love</h1>
                <div className="cart">
                    <img src ={Cart} className="cart-logo"/>
                    <span className="cart-notif">0</span>
                </div>
            </div>
            <div className="store-content">
                <RenderItem />
            </div>
        </>
    )
}

export default CandyStore