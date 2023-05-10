import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import CandyStore from "./CandyStore";
import AddToCartPage from "./AddToCartPage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/candy-store' element={<CandyStore />} />
                <Route path='/add-to-cart' element={<AddToCartPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch