import React, { useState } from "react";
import Candies from "./Candies";
import '../styles/style.css'

const RenderItem = () => {
    const candies = Candies;
    
    return (
        <>
            {candies.map(item =>{
                return(
                <div className="store-items">
                    <h3>{item.name}</h3>
                    <h5>{item.description}</h5>
                    <h3 id='price'>$ {item.price}</h3>
                </div>
                )
            })}
        </>
    )
}

export default RenderItem