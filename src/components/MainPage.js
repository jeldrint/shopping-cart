import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import CandyStore from "./CandyStore";
import AddToCartPage from "./AddToCartPage";
import Home from "./Home";
import Cart from '../images/cart.png'
import Candies from "./Candies";
import Checkout from "./Checkout";

const MainPage = () => {
    const [storeItems,setStoreItems] = useState([]);
    const [cartItemCount,setCartItemCount] = useState(0);
    const [candy, setCandy] = useState([{}]);
    const [cartItems, setCartItems] = useState([]);
    const [sumtotal, setSumtotal] = useState(0);


    useEffect(()=>{
        Candies.map(candy=>{
            return setStoreItems(prev=>[...prev, candy])
        });

        return () => setStoreItems([]);
    },[])

    return (
        <HashRouter>
            <nav className="store-header">
                <h1 style={{margin: 0}}>
                    <Link to='/' style={{display: 'inline-block', textDecoration: 'none', color: 'black'}}>Candies be love</Link>
                </h1>
                <div className="cart">
                    <Link to='/checkout'>
                        <img src ={Cart} className="cart-logo"/>
                        <span className="cart-notif">{cartItemCount}</span>
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/candy-store' element={<CandyStore setCandy={setCandy} storeItems={storeItems} />} />
                <Route path='/add-to-cart' element={<AddToCartPage candy={candy} setCartItemCount={setCartItemCount} setCartItems={setCartItems}/>} />
                <Route path='/checkout' element={<Checkout cartItems={cartItems} sumtotal={sumtotal} setSumtotal={setSumtotal} />} />
            </Routes>
        </HashRouter>
    )
}

export default MainPage