import React from 'react';
import ProductList from './ProductList';
import data from "./data.json";

const ShoesShop = () => {
  return (
    <div style={{minheight: "100vh"}} className="bg-dark">
        <div className='container'>
            <h1 className='text-warning text-center mb-5'>ShoesShop</h1>
            <ProductList products={data} />
        </div>
        
    </div>
  )
};

export default ShoesShop;