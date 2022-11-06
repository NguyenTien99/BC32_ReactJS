import React from 'react';
import { useSelector } from 'react-redux'
import QuanCo from './QuanCo';

const BanCo = () => {
    const { danhSachCuoc } = useSelector((state) => state.baucua)
  return (
    <div className='row'>
        {
            danhSachCuoc.map(item => (
                <div className="col-sm-4" key={item.ma}>
                    <QuanCo item={item} />
                </div>
            ))
        }
    </div>
  );
};

export default BanCo;