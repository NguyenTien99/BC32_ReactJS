import { Component } from "react";
import "./welcome.css"
// Có 2 cách để tạo component

// Cách 1: function component
// const Welcome = () =>{
//     return <h1>Welcome BC32</h1>
// }

// Cách 2: Class component
class Welcome extends Component {
    render(){
        // return jsx
        return <h1 className="title">Welcome BC32</h1>
    }
}

export default Welcome;