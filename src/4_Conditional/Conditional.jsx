import React from 'react';

const Conditional = () => {
    // biến kiểm tra xem user đã đăng nhập hay chưa
    const isLoggedIn = true;

    // const unreadMessage = ["A","B","C"];
    const unreadMessage = [];

    // Chưa đăng nhập
    if(!isLoggedIn){
        return(
            <div>
                <h1>Please Login</h1>
                <button>Login</button>
            </div>
        );
    }

    // Đã đăng nhập
  return (
    <div>
        <h1>Welcome back</h1>
        {/* Cách 1 : dùng toán tử bậc 3 */}
        {/* {unreadMessage.length ? ( <p>You have {unreadMessage.length} unreadMessage</p> ) : null} */}

        {/* Cách 2 : dùng toán tử && */}
        {/* Chú ý phải ép kiểu về boolean để không hiện 0 */}
        {!!unreadMessage.length && (<p>You have {unreadMessage.length} unreadMessage</p>)}

        <button>Logout</button>
    </div>
  )
};

export default Conditional;