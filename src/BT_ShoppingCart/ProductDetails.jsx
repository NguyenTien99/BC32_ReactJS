import React from "react";

const ProductDetails = ({ product }) => {
  //Nếu product là null => không cần hiển thị giao diện
  if (!product) {
    return null;
  }

  return (
    <div className="row mt-5">
        <div className="col-sm-4">
            <img src={product.image} alt={product.name} width='100%' height='400px' />
        </div>
        <div className="col-sm-8">
            <div>
                <h3>Thông số kĩ thuật</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>Màn hình</td>
                        <td>{product.display}</td>
                    </tr>
                    <tr>
                        <td>Hệ điều hành</td>
                        <td>{product.os}</td>
                    </tr>
                    <tr>
                        <td>Camera trước</td>
                        <td>{product.frontCamera}</td>
                    </tr>
                    <tr>
                        <td>Camera sau</td>
                        <td>{product.backCamera}</td>
                    </tr>
                    <tr>
                        <td>RAM</td>
                        <td>{product.ram}</td>
                    </tr>
                    <tr>
                        <td>ROM</td>
                        <td>{product.rom}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default ProductDetails;
