import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../slices/movieSlice";
import { Link, useNavigate } from "react-router-dom";

const Movie = () => {
  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  // useNavigate là custom hook dùng để điều hướng route
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      {movies.map((item) => (
        <p key={item.maPhim}>
          <span>{item.tenPhim}</span>
          {/* <Link to={`router/movie/${item.maPhim}`}>Chi tiết</Link> */}
          {/* <Link to={`${item.maPhim}`}>Chi tiết</Link> */}

          <button className="btn btn-success" onClick={() => navigate(`${item.maPhim}`)}>Chi tiết</button>
        </p>
      ))}
    </div>
  );
};

export default Movie;
