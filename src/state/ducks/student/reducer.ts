import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "student",
  initialState: { records: [] }, //{ value: { name: "", age: "" } },
  reducers: {
    add: (state: any) => {
      state.records.push(1);
    },
    del: (state: any) => {
      state.records.pop(1);
    },
  },
});
export const { add, del } = userSlice.actions;

export default userSlice.reducer;
