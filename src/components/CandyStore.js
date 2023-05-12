import React, { useEffect, useState } from "react";
import Candies from "./Candies";
import {Link} from 'react-router-dom'
import '../styles/style.css'


const CandyStore = ({setCartItems, setCandy, candy}) => {
    const candies = Candies;
    const itemClick = (e) => {
        if(e.target.className === 'store-items' || e.target.parentNode.className === 'store-items'){
            setCartItems(prevVal => prevVal +1);
            if(e.target.className === 'store-items'){
                setCandy(e.target.id);
            }else if(e.target.parentNode.className === 'store-items'){
                setCandy(e.target.parentNode.id)
            }
        }else{
            e.preventDefault();
        }
    }

    return (
        <div className="store-content">
            {candies.map((item) =>{
                    return(
                        <Link to='/add-to-cart' className='store-items' id={item.name} onClick={itemClick} style={{display: 'inline-block', textDecoration: 'none', color: 'black'}}>
                            <h3>{item.name}</h3>
                            <h5>{item.description}</h5>
                            <h3 id='price'>$ {item.price}</h3>
                        </Link> 
                    )
                })}
        </div>
    )
}

export default CandyStore