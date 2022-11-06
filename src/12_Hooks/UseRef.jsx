import { useRef, useEffect, useState } from 'react';

const UseRef = () => {
    
    // Dùng useRef để DOM
    const inputRef = useRef();
    
    // Lấy giá trị input khi click vào button
    const handleSubmit = () => {
        console.log(inputRef.current.value)
    }
    
    // Tự động focus vào input khi component được khởi tạo
    useEffect(() => {
        inputRef.current.focus();
    },[]);

    // Dùng useRef để lưu trữ giá trị nào đó mà khi đối tượng không làm component bị re-render
    const [count, setCount] = useState(0);
    // Dùng ref để lưu trữ cờ hiệu kiêm tra có phải render lần đầu hay không
    const isMounted = useRef(true);
    useEffect(() => {
        // Kiểm tra nếu là ở lần render đầu tiên thì không làm gì hết
        if(isMounted.current) {
            isMounted.current = false;  // thao tác thay đổi ref không làm component bị re-render
            return;
        }
        // do some logic ...
        console.log("Count : ",count);
    },[count]);

    // Dùng useRef để thực hiện debounce
    const timeoutRef = useRef()
    const handleSearch = (evt) => {
        // clear timeout để cancel cái setTimeout trước đó
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            console.log(evt.target.value)
        },300);
    };


  return (
    <div>
        <h1>useRef</h1>

        <input ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>

        <br />
        <br />

        <p>Count: {count}</p>
        <button onClick={() => setCount(count  + 1)}>Increase</button>

        <br />
        <br />

        <h3>Demo debounce</h3>
        <input type="text" placeholder='search' onChange={handleSearch} />
    </div>
  );
};

export default UseRef;