import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const testSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setTest: (state, { payload }) => {
      return payload;
    },
    clearTest: () => {
      return {};
    },
  },
});

const { reducer, actions } = testSlice;
export const { setTest, clearTest } = actions;
export default reducer;
