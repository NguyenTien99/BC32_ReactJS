import React from 'react';
import cn from 'classnames'
import styles from "./baucua.module.scss";
import TienThuong from './TienThuong';
import BanCo from './BanCo';
import XucXac from './XucXac';

const BauCua = () => {
  return (
    <div className={cn(styles.game,"container-fluid bg-dark")}>
        <h1 className='text-danger text-center'>Sòng bầu cua cybersoft</h1>
        <TienThuong />

        <div className="row">
            <div className="col-8">
                <BanCo />
            </div>
            <div className="col-4">
                <XucXac />
            </div>
        </div>
    </div>
  );
};

export default BauCua;