import React from 'react';
import Welcome from "./Welcome";
import Product from './Product';
import Callback from './Callback';
import User from './User';
import Children from './Children';

const users = [
  {id: 1, name: "Dan", age: 8},
  {id: 2, name: "Hai", age: 9},
  {id: 3, name: "Tung", age: 10},
]

const Props = () => {
  // Làm sao để gọi được hàm handleClick khi click vào button ở component Callback
  const handleClick = () => {
    alert("clicked form callback component");
  };

  const handleSelectUser = (user) => {
    console.log(user)
  }

  return (
    <div>
        <h1>Props</h1>
        {/* Gọi component và truyền props */}
        <Welcome />
        <Welcome name= "Alice" age={20} />
        <Welcome name= "Bob" age={25} />

        <Product />
        <Product name="Iphone 14 Promax" price={40_000_000} />

        {/* Truyền prop là một function */}
        <Callback onClick = {handleClick} />

        <h3>Users</h3>
        {
          // Dùng map bắt buộc phải có key
          users.map(user => (
            <User key={user.id} 
            user={user} 
            onSelect={handleSelectUser} />
          ))
        }

        <h3>Children</h3>
        <Children>Hello BC32</Children>
        <Children><span>Hello React</span></Children>
    </div>
  );
};

export default Props;