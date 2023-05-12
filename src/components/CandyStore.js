import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import '../styles/style.css'
import Candies from "./Candies";


const CandyStore = ({setCartItems, setCandy, storeItems}) => {
    const itemClick = (e) => {
        if(e.target.className === 'store-items' || e.target.parentNode.className === 'store-items'){
            setCartItems(prevVal => prevVal +1);
            if(e.target.className === 'store-items'){
                setCandy(()=>{
                    return Candies.filter(item=>item.name === e.target.id)
                });
            }else if(e.target.parentNode.className === 'store-items'){
                setCandy(()=>{
                    return Candies.filter(item=>item.name === e.target.parentNode.id)
                });
            }
        }else{
            e.preventDefault();
        }
    }

    return (
        <div className="store-content">
            {storeItems.map((item) =>{
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