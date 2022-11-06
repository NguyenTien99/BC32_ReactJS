import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// useSelector là một custom hook của react-redux giúp lấy state từ redux về component
// useDispatch là một custom hook của react-redux dùng để gửi 1 action thay đổi state lên store

const Redux = () => {
    // useSelect nhận vào tham số là một callback, callback có tham số là state của redux store
    const {count, message} = useSelector((state) => {
        // những gì ta return bên trong callback sẽ được trả ra là state của component
        return state;
    })

    // useDispatch trả về một dispatch function
    const dispatch = useDispatch();

    const handleIncrease = () => {
        // gọi hàm dispatch và truyền vào action để gửi lên store
        dispatch({ type: "increase_count"});
    }

    const handleDecrease = () => {
        dispatch({ type: "decrease_count"});
    }
    
    const handleChangeMessage = () => {
        const msg = prompt("input message:");
        dispatch({ type: "change_message", data: msg});

    }
  return (
    <div>
        <h1>Redux</h1>

        <p>Count: {count}</p>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <p>Message: {message}</p>
        <button onClick={handleChangeMessage}>Change message</button>
    </div>
  );
};

export default Redux;