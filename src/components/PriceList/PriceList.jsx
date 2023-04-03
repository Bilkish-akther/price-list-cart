import React, { useEffect, useState } from 'react';
import PriceCart from '../priceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    useEffect(() => {

    }, [])
    return (
        <div className='mx-12'>
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold p-4
            '>Awesome Affordable Prices</h2>

            <div className='grid grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCart
                        key={price.id}
                        price={price}
                    ></PriceCart>)
                }
            </div>

        </div>
    );
};

export default PriceList;

