import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// import { getMovies } from '../actions/movieActions';
import { getMovies } from '../slices/movieSlice';

const ReduxThunk = () => {
    const { movies, loading, error } = useSelector((state) => state.movie)
    const dispatch = useDispatch();

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const { data } = await axios.get("https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&fbclid=IwAR2RmoEzeHfxfE7iihJCGp7nlNeCODn2mt4cvXoBkUDXsgMrpBrBRenvIuU");
        //         // Thành công => dispatch action để đưa data từ API lên Store
        //         dispatch({type: "get_movie", payload : { data }});
                
        //     } catch (error) {
        //         console.log(error)
        //     }
        // };

        // fetchData();

        // dispatch thunk action
        dispatch(getMovies());
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

  return (
    <div className='container'>
        <div className="row">
            {
                movies.map((item) => (
                   <p key={item.maPhim}>{item.tenPhim}</p>
                ))
            }
        </div>
    </div>
  )
}

export default ReduxThunk