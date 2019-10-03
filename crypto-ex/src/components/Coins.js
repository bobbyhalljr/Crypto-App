import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <h1>hello</h1>
    )
}

export default Coins;