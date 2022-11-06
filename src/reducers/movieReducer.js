const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_movie/pending": 
    return {
      ...state,
      loading: true,
    };

    case "get_movie/fulfilled": 
    return {
        ...state,
        movies: action.payload.data,
        loading: false,
    }

    case "get_movie/rejected":
      return {
      ...state,
      loading: false,
      error: action.payload.error
    }

    default:
      return state;
  }
};

export default movieReducer;
