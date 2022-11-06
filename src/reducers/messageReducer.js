const messageReducer = (state = "", action) => {
    switch (action.type) {
      case "change_message":
        return action.data;

      default:
        return state;
    }
  };
  
  export default messageReducer;