import React from "react";
import Candies from "./Candies";
import '../styles/style.css'
import {Link} from 'react-router-dom'

const RenderItem = () => {
    const candies = Candies;
    
    return (
        <>
            {candies.map((item) =>{
                return(
/*                     <div className='store-items' id={item.name} style={{display: 'inline-block', textDecoration: 'none', color: 'black'}}>
                        <h3>{item.name}</h3>
                        <h5>{item.description}</h5>
                        <h3 id='price'>$ {item.price}</h3>
                    </div> */
                    <div className='store-items' id={item.name} style={{display: 'inline-block', textDecoration: 'none', color: 'black'}}>
                        <Link to='/add-to-cart' className='store-items' style={{display: 'inline-block', textDecoration: 'none', color: 'black'}}>
                            <h3>{item.name}</h3>
                            <h5>{item.description}</h5>
                            <h3 id='price'>$ {item.price}</h3>
                        </Link> 
                    </div>                 
                )
            })}
        </>
    )
}

export default RenderItem