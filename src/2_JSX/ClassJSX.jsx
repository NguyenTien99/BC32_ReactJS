// class component là rcc
import React, { Component } from 'react';

export default class ClassJSX extends Component {
    // Sử dụng thuộc tính, trong render phải có từ khóa this
    // Thuộc tính class
    a = 1;
    b = 2;

    //phương thức class
    getUserName(){
        return "Bob"
    }

    // render phương thức class
  render() {
    const message = "Hello Cybersoft";
    return (
      <div>
        <h1>JSX CLASS</h1>
        <p>{message}</p>
        <p>a + b: {this.a + this.b}</p>
        <p>UserName: {this.getUserName()}</p>
      </div>
    )
  }
};
