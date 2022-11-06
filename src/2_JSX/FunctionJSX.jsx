import React from 'react';

const FunctionJSX = () => {
    const message = "Hello BC32";
    const a = 2;
    const b = 3;

    const getUserName = () =>{
        return "Alice";
    };
    
    // JSX bắt buộc phải được đặt bên trong một thẻ đóng duy nhất 
    // Trường hợp nếu ta không muốn tạo ra một thẻ dư, ta có thể sử dụng thẻ rỗng (Fragment), nó cho phép bọc các thẻ JSX khác bên trong mà bản thân nó không hiển thị ra giao diện
  return (
    <div>
        <h1>JSX FUNCTION</h1>
        {/*  để sử dụng cú pháp javascript bên trong jsx, ta bọc trong cặp {} */}
        <p>{message}</p>
        <p>2+3 = {a + b}</p>
        <p>My Name: {getUserName()}</p>

        <div>
            {/* for => htmlFor */}
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" />
        </div>
    </div>
  )
};

export default FunctionJSX;