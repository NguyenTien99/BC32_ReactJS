// set up toolkit
import { configureStore } from "@reduxjs/toolkit";

// reducers
import countReducer from "./reducers/countReducer";
import messageReducer from "./reducers/messageReducer";

// import baucuaReducer from "./reducers/baucuaReducer";
// import movieReducer from "./reducers/movieReducer";

// slices
import baucuaReducer from './slices/BaucuaSlices';
import movieReducer from './slices/movieSlice';


/**
 * configureStore
 * - Tự động setup redux devtool, ta có thể override thông qua key devtool
 * - Tự động setup middleware là redux-thunk
 */
const store = configureStore({
  reducer: {
    count: countReducer,
    message: messageReducer,
    baucua: baucuaReducer,
    movie: movieReducer,
  },
  // devTools: false // mặc định là true
});

export default store;