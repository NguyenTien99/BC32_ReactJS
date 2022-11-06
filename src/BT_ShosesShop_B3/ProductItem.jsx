import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={product.image}
        alt={product.name}
      />
      <div className="card-body">
        <h4 className="card-title">
          {product.name}
        </h4>
        <p className="card-text">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
