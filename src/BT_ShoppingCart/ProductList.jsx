import React from 'react';

const ProductList = ({products, onSelect, onAddToCart}) => {
  return (
    <div className='row'>
        {products.map(product => {
            return (
                <div key={product.id} className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" height='400px' width='100%' src={product.image} alt={product.name} />
                        <div className="card-body">
                            <h4 className="card-title">{product.name}</h4>
                            <button 
                            className='btn btn-success' 
                            onClick={() => onSelect(product)}
                            >
                                Xem chi tiết
                            </button>
                            <button 
                            className='btn btn-danger ms-2'
                            onClick={() => onAddToCart(product)}
                            >Thêm giỏ hàng</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  );
};

export default ProductList;