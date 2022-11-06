import React from 'react';
import cn from 'classnames';
import styles from './baucua.module.scss'
import { useSelector } from 'react-redux';


const TienThuong = () => {
    const { tienThuong } = useSelector((state) => state.baucua)
  return (
    <div className='d-flex justify-content-center'>
        <div className={cn("p-3 bg-warning", styles.score)}>
            <span >Tiền thưởng:</span>
            <span className='text-success'>{tienThuong}</span>
        </div>
    </div>
  );
};

export default TienThuong;