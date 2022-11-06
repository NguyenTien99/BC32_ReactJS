import React, { Component } from 'react';

export default class EventsClass extends Component {
    userName = "Dan Nguyen";

    constructor(){
        super();
        this.showMessage = this.showMessage.bind(this)
    }

    handleClick(){
        alert("Clicked");
    }

    // Khi regular function được đưa vào trong onclick, thì ta không thể truy cập this của component, vì nó không phải do component gọi tới.
    // Cách khắc phục:
    // 1 - Chuyển thành arow function
    // showMessage = () =>{
    //     alert("Hello" + this.userName);
    // }
    // 2 - Nếu vẫn sài regular function, ta cần bind this của component vào function này
    showMessage(){
        alert("Hello" + this.userName);
    }
    
  render() {
    return (
      <div>
        <h1>EventsClass</h1>
        <button onClick={this.handleClick}>Click</button>
        <br />
        <button onClick={this.showMessage}>Show Message</button>
      </div>
    )
  }
};
