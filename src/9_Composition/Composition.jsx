import React, { Component } from "react";
import Button from "./Button";
import Modal  from "./Modal";

export default class Composition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isOpenModalCart: false,  // quản lí trạng thái ẩn/hiện của modal giỏ hàng
         isOpenModalProduct: false,  // quản lí trạng thái ẩn/hiện của modal sản phẩm
      }
    }

    toggleOpenModalCart = () =>{
        this.setState((state) => ({isOpenModalCart: !state.isOpenModalCart}))
    }
    toggleOpenModalProduct = () =>{
        this.setState((state) => ({
            isOpenModalProduct: !state.isOpenModalProduct}))
    }

  render() {
    return (
      <div>
        <h1>Button</h1>
        <Button variant="primary" className="w-50" type="submit" onClick={() => alert(123)}>
          Primary
        </Button>
        <Button variant="success">Primary</Button>

        <h1>Modal</h1>
        <Button variant="primary" onClick={this.toggleOpenModalCart}>
            Open Cart
        </Button>
        <Modal 
        title="Giỏ hàng" 
        isOpen={this.state.isOpenModalCart} 
        onClose={this.toggleOpenModalCart}>
            Đây là giỏ hàng
        </Modal>

        <Button variant="primary" onClick={this.toggleOpenModalProduct}>
            Open Product
        </Button>
        <Modal 
        title="Chi tiết sản phẩm" 
        isOpen={this.state.isOpenModalProduct} 
        onClose={this.toggleOpenModalProduct}
        footer={<Button variant={"danger"}>Delete</Button>}
        >
            Đây là Chi tiết sản phẩm
        </Modal>
      </div>
    );
  }
}
