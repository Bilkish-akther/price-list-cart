import { list } from 'postcss';
import React from 'react';

const PriceCart = ({ price }) => {
    return (
        <div className=' bg-indigo-700 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-400 text-5xl font-extrabold'>{price.price}</span>

                <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
           <h5 className='text-2xl font-bold text-center'>{price.name}</h5>


           <p>Features:</p>

           {
            price.features.map(feature => <li>{feature}</li>)
           }
           <button className='w-full bg-green-500 py-2 rounded-md text-white font-bold mt-auto hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

export default PriceCart;