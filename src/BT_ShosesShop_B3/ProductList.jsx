import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    console.log(products)
  return (
        <div className="row">
            {products.map((product) => {
                return (
                    <div key={product.id} className="col-sm-4">
                        <ProductItem product={product} />
                    </div>
                );
            })}
        </div>
  )
};

export default ProductList;