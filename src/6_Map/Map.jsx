import React from 'react';

const Map = () => {

        const products = [
            {id:1 , name: "Iphone 14 Promax", price:"40_000_000"},
            {id:2 , name: "Samsung Galaxy S22", price:"28_000_000"},
            {id:3 , name: "Xiaomi Mi 12 Pro", price:"20_000_000"},
        ]
  return (
    <div>
        <h1>Map</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                </tr>
            </thead>
            <tbody>
                {/* Viết JS thì mở {} */}
                {/* Cách 1: arrow function */}
                {
                products.map((product, index) => {
                        return (
                            // Khi dùng map để tạo giao diện, ta cần khai báo prop key cho thẻ ngoài cùng của từng phần tử trong danh sách
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        );
                    })
                }

                {/* Cách 2: arrow function bỏ { return } */}
                {/* {products.map((product, index) => 
                        (
                            // Khi dùng map để tạo giao diện, ta cần khai báo prop key cho thẻ ngoài cùng của từng phần tử trong danh sách
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    )
                } */}
            </tbody>
        </table>
    </div>
  )
};

export default Map;