import axios from 'axios';
import { useState, useEffect } from 'react';
import useCounter from './useCounter';
import useWindowSize from './useWindowSize';
import useRequest from './useRequest';

const CustomHooks = () => {

    // const [count, setCount] = useState(0);
    // const handleIncrease = () => setCount(count + 1);
    // const handleDecrease = () => setCount(count - 1);
    // customHook = useCounter
    const { count, handleIncrease, handleDecrease} = useCounter();


    // const [size, setSize] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    // });
    
    // useEffect(() => {
    //     const handleResize = () => {
    //         setSize({
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //         })
    //     }

    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     }
    // },[])
    // customHook = useWindowSize
    const size = useWindowSize();


    // const [data = {}, setData] = useState();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const resp = await axios.get("https://api.github.com/users/danndz")
    //             setData(resp.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchData();
    // },[])
    const { data = {} } = useRequest(async () => { 
        const { data } = await axios.get("https://api.github.com/users/danndz");
        return data; 
    },
    {deps : [count]}
    // nếu chạy 1 lần thì kh truyền vào tham số
    );

    

  return (
    <div>
        <h1>CustomHooks</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>

        <br />

        <p>Size: {size.width} - {size.height}</p>
        <span>{size.width < 768 ? "Mobie" : "Laptop"}</span>

        <br />
        <br />

        <p>Name: {data.name}</p>
    </div>
  );
};

export default CustomHooks;