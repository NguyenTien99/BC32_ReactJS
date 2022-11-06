// redux nhận vào 2 tham số:
// - Giá trị hiện tại của state trong store
// - object action dùng để mô tả ta muốn thay đổi state như thế nào
// reducer sẽ tự động được thực thi khi store được khởi tạo và mỗi khi ta dispatch 1 action

  const countReducer = (state = 0, action) => {
    switch (action.type) {
      case "increase_count":
        return state + 1;
      case "decrease_count":
        return state - 1;
      default:
        return state;
    }
  };
  
  export default countReducer;