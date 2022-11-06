import React, { Component } from 'react';

export default class Product extends Component {
  render() {

    // console.log(this.props)
    const {name, price} = this.props

    return (
      <div>
        <h3>
            {/* Product: {this.props.name} - {this.props.price} */}
            Product: {name} - {price}
        </h3>
        
      </div>
    );
  }
};

// Muốn default value) Muoonsc đặt giá trị mặc định cho props của Component
Product.defaultProps = {
    name : "unknow",
    price : 0,
};