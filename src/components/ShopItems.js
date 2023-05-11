import React, { useEffect, useState } from 'react'

const ShopItems = () => {
    const [shopItem, setShopItem] = useState([])
    useEffect(()=>{
        if(shopItem.length === 0){
            fetchShopItems();
        }
    },[])

    const fetchShopItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products/');
        const response = await data.json();
        console.log(response);
        response.map(item => {
            setShopItem(prev =>{
                return [...prev, item]
            })
        })
    }

    return (
        shopItem.map(item =>{
            return (
                <div>
                    <h3>{item.title}</h3>
                    <img src={item.image} />
                </div>
            )
        })
    )

}

export default ShopItems