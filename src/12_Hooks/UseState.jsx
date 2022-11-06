import React, { useState } from "react";
// useState: hook cho phép tạo và sử dụng state trong function component
// useState chỉ có thể được sử dụng bên trong function component
// useState phải được gọi ở cấp cao nhất trong component - không được nằm bên trong các block if-else, for, return,...

const UseState = () => {
  // useState nhận vào một tham số xác định giá trị khởi tạo của state
  // useState return về 1 array gồm 2 phần tử:
  // - giá trị của state
  // - hàm dùng để thay đổi giá trị state
  const [message, setMessage] = useState("Hello BC32");
  const changeMessage = () => {
    const value = prompt("Input your message");
    setMessage(value); // update state message
  };

  // Sử dụng nhiều giá trị state, ta gọi hook useState nhiều lần
  const [count, setCount] = useState(0);
  const increase = () => {
    // Quá trình thay đổi state là bất đồng bộ, tuy nhiên nó không cung cấp tham số thứ 2 là 1 callback như setState của class component

    // Cách 1: Nhận vào value
    // setCount(count + 1);

    // Cách 2: Nhận vào callbacks
    setCount((stateCount) => stateCount + 1);
    // setCount((stateCount) => stateCount + 1);
  };

  // State là array
  const [animals, setAnimal] = useState(["dog", "cat"]);
  const addAnimals = () => {
    const animal = prompt("Input animal");
    setAnimal([...animals, animal]);
    // setAnimal((animals) => [...animals,animal])   // callback
  };
  const removeAnimals = () => {
    const value = prompt("Input remove animal");
    const newAnimal = animals.filter((animal) => animal !== value);
    setAnimal(newAnimal);
  };

  // state là object
  const [user, setUser] = useState({ username: "", email: "" });
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setUser({...user, [name]: value});
  }

  return (
    <div>
      <h1>UseState</h1>
      <p>Message: {message}</p>
      <button onClick={changeMessage}>Change message</button>

      <br />
      <br />

      <p>Count : {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <br />
      <br />

      <p>Animals : {animals.join(", ")}</p>
      <button onClick={addAnimals}>Add animal</button>
      <button onClick={removeAnimals}>remove animal</button>

      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default UseState;
