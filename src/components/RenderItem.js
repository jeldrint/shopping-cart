import React from "react";
import Candies from "./Candies";
import '../styles/style.css'
import {Link} from 'react-router-dom'

const RenderItem = ({setCartItems, setCandy, candy}) => {
    const candies = Candies;

    const getItem = (e) => {
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
                        <Link to='/add-to-cart' className='store-items' id={item.name} onClick={getItem} style={{display: 'inline-block', textDecoration: 'none', color: 'black'}}>
                            <h3>{item.name}</h3>
                            <h5>{item.description}</h5>
                            <h3 id='price'>$ {item.price}</h3>
                        </Link> 
                    )
                })}
        </div>
    )
}

export default RenderItem