import React from "react";
import '../styles/AddToCartPage.css'

const AddToCartPage = ({candy}) => {
    return (
        <div className='cart-panel'>
            <h1>{candy}</h1>
        </div>
    )
}

export default AddToCartPage