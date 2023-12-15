import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  result: "",
};
export const calcslice = createSlice({
  name: "calc",
  initialState: initialstate,

  sum: (state, action) => {
    console.log("call reduser fo action");
  },
});
export const { sum } = calcslice.actions;
export default calcslice.reducer;
