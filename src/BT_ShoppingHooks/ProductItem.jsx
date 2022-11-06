import React from 'react';
import { Card, Button } from "react-bootstrap"

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <Card>
        <Card.Img src={product.image} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary" onClick={() => onAddToCart(product) }>Thêm giỏ hàng</Button>
        </Card.Body>
    </Card>
  );
};

export default ProductItem;