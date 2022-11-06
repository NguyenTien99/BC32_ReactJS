import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import styles from './baucua.module.scss'
// import { playGame } from "../actions/baucuaActions"; 
import { playGame } from "../slices/BaucuaSlices"; 



const XucXac = () => {
  const { xucXac } = useSelector((state) => state.baucua);
  const dispatch = useDispatch()

  const handleplayGame = () => {
    // dispatch({ type: "play_game" })
    dispatch(playGame());
  }

  return (
    <div
      className={cn(
        "d-flex flex-column justify-content-center align-items-center ",
        styles.dice
      )}
    >
      {xucXac.map((item,index) => (
        <img
        key={index}
          src={`./img/${item}.png`}
          alt={item}
          width={70}
          height={70}
          className="mb-3"
        />
      ))}

      <button className="btn btn-success px-5 py-3" onClick={handleplayGame}>Xốc</button>
    </div>
  );
};

export default XucXac;
