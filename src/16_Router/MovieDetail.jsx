import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"

const MovieDetail = () => {
    // useParams : custom hook để lấy dynamic params từ trên url xuống dưới và chuyển thành state của component
    const {movieID} = useParams();

    useEffect(() => {
        // gọi action lấy thông tin chi tiết phim từ mã phim lấy từ url
        // dispatch(getMovieDetails(movieID))
    },[movieID])
  return (
    <div>
        <h1>MovieDetails</h1>

        <h3>ID:{movieID}</h3>
    </div>
  )
}

export default MovieDetail