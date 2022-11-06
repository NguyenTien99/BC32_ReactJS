import React from 'react';
import { useDispatch } from 'react-redux'
// import { changeScore } from '../actions/baucuaActions';
import { changeScore } from '../slices/BaucuaSlices';


const QuanCo = ({ item }) => {
    const dispatch = useDispatch();

    const handlechangeScore = (diemCuoc) => {
        // dispatch({ type: "change_score", payload: { diemCuoc, ma: item.ma } })
        // dispatch(changeScore(item.ma, diemCuoc))
        dispatch(changeScore({ma : item.ma, diemCuoc}))

    }
  return (
    <div className='mt-5 text-center'>
        <img src={`./img/${item.ma}.png`} alt={item.ma} />
        <br />
        <br />
        <span className=' bg-warning p-3'>
            <span className='me-2'>Cược:</span>
            <button className='btn btn-success' onClick={() => handlechangeScore(-100)}>-</button>
            <span className='mx-2'>{item.diemCuoc}</span>
            <button className='btn btn-success' onClick={() => handlechangeScore(100)}>+</button>
        </span>
    </div>
  );
};

export default QuanCo;