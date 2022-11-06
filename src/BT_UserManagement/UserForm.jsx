import React, { Component } from "react";
import axios from "axios";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        address: "",
      },
    };
  }

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.setState((state) => ({
      values: {
        ...state.values, // sao chép lại những giá trị hiện đang có trong object value
        [name]: value, // thay đổi 1 thuộc tính trong object values
      },
    }));
  };

  handleSubmit = async (evt) =>{
    // Ngăn hành vi reload mặc định khi submit form
    evt.preventDefault()

    const { id, ...payload } = this.state.values

    // Gọi API thêm user
    try {
      if(id){
        // gọi API cập nhật user
        await axios.put(
          `https://62f50938535c0c50e76847ad.mockapi.io/user/${id}`,
          payload 
          );
      } else{
        // Gọi API thêm user
        await axios.post(
          "https://62f50938535c0c50e76847ad.mockapi.io/user",
          payload 
        );
      }

        // await axios.post(
        //     "https://62f50938535c0c50e76847ad.mockapi.io/user",
        //     this.state.values
        // );

        // Dũ liệu chỉ mới thay đổi ở phía server, ta cần gọi lại API get users để cập nhật ở phía client
        // Tuy nhiên việc call API get users và setState đã được thực hiện ở component UserManagement thông qua hàm fetchUsers
        // Để component UserForm có thể gọi được hàm fetchUser, ta sẽ truyền hàm fetchUsers xuống component UserForm thông qua props onSubmitSuccess
        const isReset = id ? false: true;
        this.props.onSubmitSuccess(isReset);   

        //Reset input
        this.setState({
            values:{
                firstName: "",
                lastName: "",
                email: "",
                dateOfBirth: "",
                address: "",
            }
        })
    } catch (error) {
        console.log(error);
    }
  };

  componentDidUpdate(prevProps){
    if(this.props.user && prevProps.user !== this.props.user ){
      // Kiểm tra nếu props user khác null và giá trị của nó bị thay đổi
      // => Dùng giá trị mới của props user để setState lại cho Values
      this.setState({ values: {...this.props.user}})
    }
  }


  render() {

    const { values } = this.state;

    return (
      <form className="my-5" onSubmit={this.handleSubmit}>
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName" // giá trị của name phải trùng với tên key trong state value
            value={values.firstName}
            id="firstName"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            id="lastName"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={values.email}
            id="email"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        {/* dateOfBirth */}
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date Of Birth
          </label>
          <input
            type="text"
            name="dateOfBirth"
            value={values.dateOfBirth}
            id="dateOfBirth"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        {/* address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={values.address}
            id="address"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        <button className="btn btn-success" >Submit</button>

      </form>
    );
  }
}
