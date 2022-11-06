import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tienThuong: 500,
  danhSachCuoc: [
    { ma: "nai", diemCuoc: 0 },
    { ma: "bau", diemCuoc: 0 },
    { ma: "ga", diemCuoc: 0 },
    { ma: "ca", diemCuoc: 0 },
    { ma: "cua", diemCuoc: 0 },
    { ma: "tom", diemCuoc: 0 },
  ],
  xucXac: ["bau", "bau", "bau"],
};
const XUC_XAC = ["nai", "bau", "ga", "ca", "cua", "tom"];

const baucuaSlice = createSlice({
  name: "baucua", // dùng làm namespace, là prefix cho action type
  initialState, // định nghĩa giá trị state
  reducers: {
    // Kết hợp reducer + action
    changeScore: (state, action) => {
      const { diemCuoc, ma } = action.payload;

      // Kiếm tra nếu tăng cược nhưng tiền thưởng = 0 thì không xử lí
      if (diemCuoc > 0 && state.tienThuong === 0) {
        return state;
      }

      // kiểm tra nếu giảm cược nhưng điểm cược = 0 thì không xử lí
      const index = state.danhSachCuoc.findIndex((item) => item.ma === ma);
      if (diemCuoc < 0 && state.danhSachCuoc[index].diemCuoc === 0) {
        return state;
      }

      // Tiền thưởng mới
      const tienThuong = state.tienThuong - diemCuoc;
      // Danh sách cược mới
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        if (item.ma === ma) {
          return { ...item, diemCuoc: item.diemCuoc + diemCuoc };
        }
        return item;
      });

      // Lưu ý : nếu state là object, luôn luôn return về một object mới
      return { ...state, tienThuong, danhSachCuoc };
    },
    playGame: (state, action) => {
      // random ngẫu nhiên 3 xúc xắc mới
      const xucXac = state.xucXac.map((item) => {
        // Math.ramdom() * max - min + min
        // max = 5 ; min = 0
        const index = Math.floor(Math.random() * 5);
        return XUC_XAC[index];
      });

      // lấy ra danh sách những quân cờ có đặt cược
      const danhSachCuoc = state.danhSachCuoc.filter((item) => item.diemCuoc);

      let tongTien = state.tienThuong;
      // Hoàn cược , duyệt qua danhSachCuoc và kiểm tra xem có trùng với bất kì xúc xắc nào hay k
      danhSachCuoc.forEach((item) => {
        const isExisted = xucXac.some((x) => x === item.ma); // trùng
        if (isExisted) {
          tongTien += item.diemCuoc;
        }
      });

      // Xử lí tiền thắng cược, duyệt qua danh sách xúc xắc, kiểm tra xem có trùng với danh sách cược hay không
      xucXac.forEach((x) => {
        const item = danhSachCuoc.find((item) => item.ma === x);
        if (item) {
          tongTien += item.diemCuoc;
        }
      });

      const danhSachCuocBanDau = state.danhSachCuoc.map((item) => ({
        ...item,
        diemCuoc: 0,
      }));

      return {
        ...state,
        xucXac,
        tienThuong: tongTien,
        danhSachCuoc: danhSachCuocBanDau,
      };
    },
  },
});

//action
// sử dụng : dispatch(changgeScore({ diemCuoc, ma }));
export const { changeScore, playGame } = baucuaSlice.actions;

// reducer
export default baucuaSlice.reducer
