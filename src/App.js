import React from "react";
import CandyStore from "./components/CandyStore";
import ShopItems from "./components/ShopItems";
import {Link} from 'react-router-dom'

const App = () => {
    return (
        <>
            <h1>Hello there</h1>
                <button>
                    <Link to='/candy-store'>Go to shop</Link>
                </button>
        </>
    )
}


export default App