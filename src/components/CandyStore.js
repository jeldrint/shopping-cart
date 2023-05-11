import React, { useEffect, useState } from "react";
import RenderItem from "./RenderItem";
import {Link} from 'react-router-dom'

const CandyStore = ({setCartItems, setCandy, candy}) => {

    useEffect(()=>{
        const itemClick = (e) => {
            console.log(e.target)
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
        document.addEventListener('click',itemClick);
        return () => document.removeEventListener('click',itemClick);
    },[])

    return (
        <>
            <div className="store-content">
                <RenderItem />
            </div>
        </>
    )
}

export default CandyStore