import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

const Cart = ({ isOpen, onClose, carts}) => {
  return (
    <Modal show={isOpen} onHide={onClose} size="lg" >
        <Modal.Header closeButton>
            <Modal.Title>Giỏ hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Table>
              <thead>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {
                  carts.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>
                        <img src={item.image} alt={item.id} width={50} height={50} />
                      </td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={onClose}>Close</Button>
        </Modal.Footer>
    </Modal>
  );
};

export default Cart;