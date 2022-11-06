import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserForm from "./UserForm";
import Search from "./Search";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [], // danh sách users
      selectedUser: null, //user được chọn để cập nhật
      searchTerm: "", // lưu trữ giá trị tìm kiếm
    };
  }

  // Phương thức call API và setState cho Users
  fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://62f50938535c0c50e76847ad.mockapi.io/user",
        {
          params: {
            email: this.state.searchTerm,
          },
        }
      );
      // Call API thành công => setState
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  // Phương thức Call API và setState cho users
  fetchUsersById = async (userId) => {
    try {
      const { data } = await axios.get(
        `https://62f50938535c0c50e76847ad.mockapi.io/user/${userId}`
      );
      // Call API thành công => setState
      this.setState({ selectedUser: data });
    } catch (error) {
      console.log(error);
    }
  };

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm })
  }

  handleSubmitSuccess = (isReset) => {
    // isReset: true/ false - có cần reset lại toàn bộ danh sách hay không
    if(isReset){
      this.setState({searchTerm: ""});
    } else {
      this.fetchUsers()
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate( _ , prevState){
    if(prevState.searchTerm !== this.state.searchTerm){
      this.fetchUsers();
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">UserManagement</h1>

        <UserForm
          user={this.state.selectedUser}
          onSubmitSuccess={this.handleSubmitSuccess}
        />

        <Search onSearch={this.handleSearch} />

        <UserList
          users={this.state.users}
          onSelect={this.fetchUsersById}
          onDeleteSuccess={this.fetchUsers}
        />
      </div>
    );
  }
}
