import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <button>
                <Link to='/candy-store'>Go to shop</Link>
            </button>
        </>
    )
}


export default Home