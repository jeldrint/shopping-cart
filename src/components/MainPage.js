import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CandyStore from "./CandyStore";
import AddToCartPage from "./AddToCartPage";
import Home from "./Home";
import Cart from '../images/cart.png'
import Candies from "./Candies";


const MainPage = () => {
    const [storeItems,setStoreItems] = useState([]);
    const [cartItems,setCartItems] = useState(0);
    const [candy, setCandy] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);

    useEffect(()=>{
        if(storeItems.length === 0){
            Candies.map(candy=>{
                return setStoreItems(prev=>[...prev, candy])
            });
        }
    },[])

    return (
        <BrowserRouter>
            <nav className="store-header">
                <h1 style={{margin: 0}}>
                    <Link to='/' style={{display: 'inline-block', textDecoration: 'none', color: 'black'}}>Candies be love</Link>
                </h1>
                <div className="cart">
                    <img src ={Cart} className="cart-logo"/>
                    <span className="cart-notif">{cartItems}</span>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/candy-store' element={<CandyStore setCartItems={setCartItems} setCandy={setCandy} storeItems={storeItems} />} />
                <Route path='/add-to-cart' element={<AddToCartPage candy={candy} storeItems={storeItems} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainPage