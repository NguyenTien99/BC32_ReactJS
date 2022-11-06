import React, { Component, PureComponent } from "react";

export default class Welcome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.userId,
    };
  }

  handleScroll = () => {
    console.log("scrolling");
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  // Trường hợp khi props thay đổi ta muốn dùng giá trị mới của props để gán lại cho state của component, ta sẽ thực hiện nó trong componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      this.setState({ userId: this.props.userId });
    }
  }

  // Thường dùng để dọn dẹp các tác vụ không còn cần thiết khi component bị hủy bỏ
  // VD: - setTimeout -> clearTimeout
  //     - addEventListener -> removeEventListener
  componentWillUnmount() {
    console.log("componentWillUnmount run");
    document.removeEventListener("scroll", this.handleScroll);
  }

  // Được sử dụng để tránh cho component bị render lại không cần thiết
  // Phương thức này cung cấp 2 tham số là giá trị mới của props và state
  // * ta có thể dùng PureComponent để React xử lí việc kiểm tra state và props có thay đổi hay không để cho phép re-render component
//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.props.userId !== nextProps.userId) {
//       return true; // cho phép render lại
//     }

//     return false; // không cho phép render lại
//   }

  render() {
    console.log('Welcome render run')
    return (
      <div>
        <h1>Welcome user {this.state.userId}</h1>
      </div>
    );
  }
}
