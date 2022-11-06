import React from 'react'
import ProductItem from './ProductItem';

const ProductList = ( { products, onAddToCart }) => {
  return (
    <div className='row mt-3'>
        {products.map((product) => (
            <div className="col-sm-4" key={product.id}>
                <ProductItem onAddToCart={onAddToCart} product={product} />
            </div>
        ))}
    </div>
  );
};

export default ProductList;