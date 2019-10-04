import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

const Coins = () => {
    const [coins, setcoins] = useState([])

    useEffect(() => {
        axios.get('https://api.coinpaprika.com/v1/coins')
        .then(res => {
            console.log(res.data)
            setcoins(res.data)
        })
        .catch(err => console.log(err.response))
    }, [])

    return (
        coins.map(coin => {
            return (
                <div>
                    <h2>{coin.name} {coin.symbol}</h2>
                    <button><NavLink to='/coin/:id'>Get Coin Info</NavLink></button>
                </div>
            )
        })
    )
}

export default Coins;