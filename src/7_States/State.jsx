// Hiện tại muốn sử dụng state, ta cần dùng class component
import React, { Component } from 'react';

export default class State extends Component {
    constructor(props){
        super(props)

        // state là một object đặc biệt để lưu trữ dữ liệu trong component
        // Mỗi khi một giá trị bên trong object state thay đổi nó sẽ tự động chạy lại hàm render
        this.state = {
            //Tạo giá trị mặc định cho state
            // message: "Hello cybersoft",

            // Gán giá trị của props làm giá trị mặc định của state
            message: props.message,

            count: 0,

            colors: ["red", "green", "blue"],
        }
    }

    // Hàm thay đổi content khi nhập input
    changeMessage = () =>{
        const message = prompt('Input your message')
        // không được thay đổi giá trị của object state
        // this.state.message = message

        // Để thay đổi state ta cần dùng hàm setState
        // Hàm setState cung cấp tham số thứ 2 là một callback sẽ được gọi sau khi quá trình cập nhật state hoàn tất
        this.setState({ message: message}, () => {
            console.log("State message bên trong callback",this.state.message);
        });

        // Quá trình cập nhật state là bất đồng bộ => log ra giá trị chưa thay đổi của state
        console.log("State message bên dưới hàm setState",this.state.message);
    };

    // Hàm tăng +1 cho biến count
    handleIncrease = () => {
        // this.setState({count: this.state.count + 1})

        // Khi cập nhật state nếu cần dùng giá trị hiện tại của state dể tính toán ra giá trị mới ta nên viết setState nhận vào tham số đầu tiên là một callback nhận tham số là giá trị mới nhất của state và dùng nó để return về state mới
        this.setState((state) => ({ count: state.count + 1}));
        this.setState((state) => ({ count: state.count + 1}));
    };

    // Thêm vào 1 mảng
    handleAddColor = () => {
        const color = prompt('Input your color:')
        console.log(color)
        this.setState((state) => ({colors: [...state.colors,color],}));
    };

    // Xóa 1 item của 1 mảng
    handleRemoveColor = () => {
        const color = prompt('Input your color:')
        //Cách 1:
        const newColors = this.state.colors.filter(item => item !== color)
        this.setState({colors: newColors});

        //Cách 2:
        // this.setState(state => ({
        //     colors: state.colors.filter(item => item !== color),
        // }))
    }

  render() {
    return (
      <div>
        <h1>State</h1>
        <p>State message: {this.state.message}</p>
        <button onClick={this.changeMessage}>Change message</button>

        <br />
        <br />

        <p>State count: {this.state.count}</p>
        <button onClick={this.handleIncrease}>Increase</button>

        <br />
        <br />

        <p>State color: {this.state.colors.join(", ")}</p>
        <button onClick={this.handleAddColor}>Add color</button>
        <button onClick={this.handleRemoveColor}>Remove color</button>
      </div>
    )
  }
}
