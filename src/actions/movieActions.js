import axios from "axios";

//Action bình thường mà redux cho phép, chỉ được return về plain object
// export const getMovies = (data) => {
//     return {
//         type: "get_movie",
//         payload: { data },
//     }
// }

// thunk action
export const getMovies = () => {
  // khi sử dụng redux-thunk, nó cho phép action về một async function
  // function này nhận vào 2 tham số : dispatch, getState
  return async (dispatch, getState) => {
    // trước khi request API, dispatch action pending
    dispatch({type: "get_movie/pending" });
    try {
      const { data } = await axios.get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&fbclid=IwAR2RmoEzeHfxfE7iihJCGp7nlNeCODn2mt4cvXoBkUDXsgMrpBrBRenvIuU"
      );

      // call API thành công, dispatch action chứa data từ API
      // lúc này action này mới được đưa vào store
      dispatch({
        type: "get_movie/fulfilled",
        payload: { data },
      });
    } catch (error) {
        dispatch({type: "get_movie/rejected",
        payload: {
            // error.response.data là format của axios
            error: error.response.data || "Something went wrong, please try later!!!"
        }
    })
    }
  };
};

// async => Promise({type: "get_movie",payload: {data}})
