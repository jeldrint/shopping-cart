import React from "react";
import '../styles/AddToCartPage.css'

const AddToCartPage = ({candy}) => {

    return (
        <div className='cart-panel'>
            <h1>{candy[0].name}</h1>
            <h4>{candy[0].description}</h4>
            <h2>$ {candy[0].price}</h2>
        </div>
    )
}

export default AddToCartPage