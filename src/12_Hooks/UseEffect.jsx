import { useEffect, useState } from 'react'

// useEffect là một hook dùng để thay thế các khái niệm lifecycle bên class component
/**
 * MOUNTING:
 * - render
 * - useEffect
 * 
 * UPDATING:
 * - render
 * - useEffect cleanup -> useEffect NẾU dependency list bị thay đổi 
 * 
 * UNMOUNTING:
 * - useEffect cleanup
 */

const UseEffect = () => {
    const [count, setCount ] = useState(0);
    const [colors, setColors ] = useState(["red","green","blue"]);

    // useEffect nhận vào 2 tham số
    // - callback function
    // - dependency list
    // Nếu dependency list là một array rỗng, thì callback của useEffect sẽ chỉ chạy 1 lần duy nhất sau lần render đầu tiên (tương đương ComponentDidMount)
    useEffect(() => {
        // resquest API, DOM, setTimeout,...
        console.log("effect run");

        // cleanup effect (tương đương componentWillUnmount)
        // function này sẽ được chạy trước khi component bị hủy bỏ (unmounting)
        return () => {
            // clearTimeout, removeEventListener,...
            console.log("cleanup effect run;")
        }
    }, []);


    // Nếu dependency list có chứa các giá trị (state hoặc props) , thì callback của useEffect sẽ được chạy sau lần render đầu tiên và được chạy sau những lần render tiếp theo Nếu các giá trị truyền vào bị thay đổi (tương đương ComponentDidMount + ComponentDidUpdate)
    useEffect(() => {
        console.log("count: effect run ")
        let timer = setTimeout(() => {
            console.log(`[count]: effect run - ${count}`)
        }, 2000)

        // cleanup Effect sẽ được chạy trước khi component bị hủy bỏ, hoặc sau khi render mà giá trị của dependency list bị thay đổi và được chạy trước Effect
        return () => {
            console.log("count: cleanup effect run");
            clearTimeout(timer);
        }
    },[count])


    // chạy sau lần render đầu tiên 
    // chạy sau những lần render tiếp theo nếu state color bị thay đổi
    useEffect(() => {
        console.log(`[colors]: effect run - ${colors}`)
    },[colors])

    const addColor = (() => {
        const value = prompt("Input color");
        setColors([...colors,value]);
    });

    

    console.log("render run")
  return (
    <div>
        <h1>UseEffect</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>

        <br />
        <br />

        <p>Colors: {colors.join(", ")}</p>
        <button onClick={addColor}>Add Color</button>
    </div>
  )
}

export default UseEffect