import React from 'react';

// html: <button onClick="onSubmit()">Submit</button>

const Events = () => {
    const onSubmit = () =>{
        alert("CLicked")
    }

    const showMessage = (name) =>{
        alert("Hello" + name)
    }

    // viết dài dòng gọi hàm temp -> showMessage("Alice")  tương tự () => showMessage("Alice") - hàm ẩn danh gọi 1 lần  
    // const temp = () =>{
    //     return showMessage("Alice")
    // }
    // <=> () => showMessage('Alice')

    const handleChange = (evt) =>{
        console.log("target:", evt.target);
        console.log("value:", evt.target.value);
    }

  return (
    <div>
        <h1>Events</h1>

        {/* Phải truyền vào onclick một callback function (chỉ truyền tên hàm - không bao gồm cặp dấu () gọi hàm) */}
        <button onClick={onSubmit}>Submit</button>
        <br />

        {/* Trường hợp cần truyền tham số khi gọi hàm, ta viết 1 arrow function return về function mà ta muốn gọi tới,lúc này ta sẽ gọi hàm và truyền vào tham số cho hàm */}
        <button onClick={() => showMessage('Alice')}>ShowMessage</button>
        <br />

        <input type="text" onChange={handleChange} />
        {/* <input type="text" onChange={(evt) => handleChange(evt,...)}/> */}
    </div>
  )
};

export default Events;