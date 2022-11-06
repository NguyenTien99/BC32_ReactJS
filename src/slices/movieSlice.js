import {
  createSlice,
  createAsyncThunk,
//   isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

// createAsyncThunk : giúp dispatch action pending/fulfilled/rejected một cách tự dộng
export const getMovies = createAsyncThunk(
  "movie/getMovies", //action type
  // ví dụ dispatch(getMovie(params)) => async (params, thunkAPI) => {}
  // thunkAPI là một object chứa hàm của redux-thunk: dispatch, getState
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&fbclid=IwAR2RmoEzeHfxfE7iihJCGp7nlNeCODn2mt4cvXoBkUDXsgMrpBrBRenvIuU"
      );
      // thành công
      return { data };
    } catch (error) {
      // thất bại

      //Cách 1:  return rejectWithValue(error)
      //     return rejectWithValue({
      //         error:
      //          error.response.data || "Something went wrong, please try later!!!"
      // })

      // Cách 2: throw error
      throw error.response.data;
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // getMoviePending: (state, action) => {
    //   return { ...state, loading: true };
    // },
    // getMovieFulfilled: (state, action) => {
    //   return { ...state, movies: action.payload.data, loading: false };
    // },
    // getMovieRejected: (state, action) => {
    //   return { ...state, error: action.payload.error, loading: false };
    // },
  },

  // Để xử lí các action được dispatch từ creaseAsyncThunk ta dùng extraReducers
  extraReducers: (builder) => {
    // builder.addCase("movie/getMovies/pending")
    builder.addCase(getMovies.pending, (state,action) => {
        return {...state, loading: true}
    });
    builder.addCase(getMovies.fulfilled, (state,action) => {
        return {...state, movies: action.payload.data, loading: false}
    });
    builder.addCase(getMovies.rejected, (state,action) => {
        return {...state, error: action.error.message}
    })
  }
});

export default movieSlice.reducer;

//=============================== Cách dùng thunk action cũ ====================
//action
// const { getMoviePending, getMovieFulfilled, getMovieRejected } =
//   movieSlice.actions;

// thunk action
// export const getMovies = () => {
//   // khi sử dụng redux-thunk, nó cho phép action về một async function
//   // function này nhận vào 2 tham số : dispatch, getState
//   return async (dispatch, getState) => {
//     // trước khi request API, dispatch action pending
//     dispatch(getMoviePending());
//     try {
//       const { data } = await axios.get(
//         "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&fbclid=IwAR2RmoEzeHfxfE7iihJCGp7nlNeCODn2mt4cvXoBkUDXsgMrpBrBRenvIuU"
//       );

//       // call API thành công, dispatch action chứa data từ API
//       // lúc này action này mới được đưa vào store
//       dispatch(getMovieFulfilled({ data }));
//     } catch (error) {
//       dispatch(
//         getMovieRejected({
//           error:
//             error.response.data || "Something went wrong, please try later!!!",
//         })
//       );
//     }
//   };
// };
