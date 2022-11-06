import {useState} from 'react';

// custom hook: là những hooks do mình tự định nghĩa để thực hiện một logic nào đó, thường được sử dụng để chia sẽ logic giữa các component
// custom hook phải được được tên theo format có từ khóa use ở đầu, VD: useCounter, use...
// - Khác với component, custom hooks không return về giao diện (jsx) mà sẽ return về một dữ liệu nào đó (string, number, array, object,..)
// - khác với function thông thường, custom hooks được phép sử dụng các react hook (useState, useEffect,...)

const useCounter = () => {
    const [count, setCount] = useState(0);
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);
  return { count, handleIncrease, handleDecrease };
};

export default useCounter;