import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "student",
  initialState: { records: [] },
  reducers: {
  },
});
export const { add, del } = userSlice.actions;

export default userSlice.reducer;
