import React from 'react';

// Mọi component luôn nhận được một object props
// Mặc định props là một object rỗng: {}
// Khi một component được gọi và được truyền vào các properties, các giá trị đó sẽ được đưa vào bên trong object props component

// C1: const Welcome = (props) => {}
// C2: const Welcome = {name, age} => {}

// const Welcome = (props) => {
// const Welcome = ({name, age}) => {        // destructuring
const Welcome = ({name = "unknow", age = 0}) => {    // + default

    // console.log(props);
    // const {name, age} = props  //destructuring
  return (
    <div>
        <h3>Hello {name} - {age}</h3>
    </div>
  )
};

export default Welcome;