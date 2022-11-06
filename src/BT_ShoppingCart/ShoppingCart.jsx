import React, { Component } from 'react';
import Cart from './Cart';
import data from './data.json'
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

export default class ShoppingCart extends Component {
  // snippet: rconst
  constructor(props) {
    super(props)
  
    this.state = {
       selectedProduct: null,

       //state quản lí trạng thái ẩn hiện của modal
       isOpen: false,

       // state lưu trữ danh sách sản phẩm trong giỏ hàng
       carts: [],
    }
  }

  // Hàm xử lí xem chi tiết
  handleSelect = (product) =>{
    // product: sản phẩm ta click vào button chi tiết ở component ProductList
    // tham số product hiện tại chỉ truy cập được bên trong hàm handleSelect
    console.log(product);

    // ta cần dùng state để lưu trữ giá trị của sản phẩm đang được chọn
    this.setState({selectedProduct: product});
  };

  // Hàm xử lí đóng mở modal
  handleToggleModal = () =>{
    // Thay đổi giá trị state isOpen thành giá trị phủ định của chính nó
    this.setState((state) => ({
      isOpen: !state.isOpen
    }));
  };

  // Hàm xử lí thêm product vào Cart
  handleAddToCart = (product) =>{
    console.log("Sản phẩm thêm vào giỏ hàng: ", product)
    // Kiểm tra xem sản phẩm sản phẩm đã tồn tại trong giỏ hàng chưa
    const index = this.state.carts.findIndex(item => item.id === product.id)

    if(index === -1){
      // index = -1 sản phẩm chưa tồn tại trong giỏ hàng
      this.setState((state) => ({carts: [...state.carts,{...product, quantity:1}]}))
    }else{
      // sản phẩm đã tồn tại trong giỏ hàng => chỉ cẩn tăng số lượng lên 1 đơn vị
      const newCarts = [...this.state.carts];
      newCarts[index].quantity += 1;
      this.setState({carts: newCarts })
    }
  };

  handleChangQuantity = (productID, quantity) =>{
    const index = this.state.carts.findIndex((item) => item.id === productID)
    
    // luôn luôn tạo ra mảng mới không được trực tiếp thay thế state
    const newCarts = [...this.state.carts];

    if(newCarts[index].quantity === 1 && quantity === -1){
      newCarts.splice(index,1);
      this.setState({carts: newCarts})
    }else{
      newCarts[index].quantity += quantity;
      this.setState({cart: newCarts})
    }
    
  }

  render() {
    return (
      <div className='container'>
        <div className='d-flex justify-content-between mb-3'>
          <h1 className='text-primary'>FPT Shop</h1>
          <button 
          className='btn btn-primary' 
          onClick={this.handleToggleModal}
          >Giỏ hàng</button>
        </div>

        <ProductList 
        products={data} 
        onSelect={this.handleSelect}
        onAddToCart={this.handleAddToCart}
        />
        <ProductDetails product={this.state.selectedProduct} />

        <Cart 
        isOpen={this.state.isOpen}
        onClose={this.handleToggleModal} 
        carts={this.state.carts}
        onChangeQuantity={this.handleChangQuantity}
        />
      </div>
    )
  };
};
