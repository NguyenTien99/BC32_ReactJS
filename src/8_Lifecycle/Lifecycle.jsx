import React, { Component } from "react";
import Welcome from "./Welcome";

/**
 * Vòng đời của một component
 * 
 * - MOUNTING: Sau khi component được khởi tạo
 * + constructor: khởi tạo state, bind this trong method
 * + render: Return về jsx hiển thị giao diện
 * + componentDidMount: tự động được thực thi một lần duy nhất
 * 
 * - UPDATING: khi nhận được props mới hoặc setState
 * + render
 * + componentDidUpdate: tự động được thực thi từ sau lần render thứ 2 trở đi
 * 
 * - UNMOUNTING: trước khi component bị hủy bỏ
 * + componentWillUnmountL : tự động được thực thi một lần duy nhất trước khi component bị hủy bỏ
 */

export default class Lifecycle extends Component {
  //rconst
  constructor(props) {
    super(props);
    console.log("constructor run");
    this.state = {
        // state lưu trữ dữ liệu từ API
        todos: [],

        // state lưu trữ giá trị user đang được chọn
        userId: "",
    };
  }

  // Thường dùng để call API, setTimeout, setInterval , tương tác với DOM
  // setState trong componentDidMount sẽ trigger re-render
  async componentDidMount() {
    console.log("componentDidMount run");
    this.fetchTodos();
  }

  // Thường dùng để nếu sau khi state và props thay đổi ta cần dùng giá trị của nó để thực hiện một số hành động nào đó: CallAPI, setState,...
  // componentDidUpdate có 2 tham số là giá trị trước khi thay đổi của props và state 
  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate run");
    // Kiểm tra nếu state userId thay đổi sẽ gọi lại hàm fetchTodos
    if(prevState.userId !== this.state.userId){
        this.fetchTodos()
    }
  }

  fetchTodos = async () => {
    let url = "https://jsonplaceholder.typicode.com/todos";

    if(this.state.userId){
        url += `?userId=${this.state.userId}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Call API thành công, gán data cho state todos
    this.setState({todos: data});
  }

  handleChange = (evt) =>{
    const {value} = evt.target;
    this.setState({userId: value});
  }
  render() {
    console.log("render run");
    return <div>
        <select onChange={this.handleChange}>
            <option value="">user</option>
            <option value={1}>user 1</option>
            <option value={2}>user 2</option>
            <option value={3}>user 3</option>
        </select>
        <ul>
            {this.state.todos.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>

        {/* Nếu có userId mới hiển thị component Welcome */}
        
        {this.state.userId && <Welcome userId={this.state.userId} />}
    </div>;
  }
}
