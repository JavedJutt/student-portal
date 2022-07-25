import { createSlice } from "@reduxjs/toolkit";
import { IStudentRaw } from "./types";
export const userSlice = createSlice({
  name: "student",

  initialState: {
    data: [] as IStudentRaw[],
    specificStudent: {},
  },

  reducers: {
    fetchStudentsSuccess: (
      state,
      { payload }: { payload: IStudentRaw[] | any }
    ) => {
      state.data = [...payload];
    },
    deleteStudentSuccess: (
      state,
      { payload }: { payload: IStudentRaw[] | any }
    ) => {
      const index = state.data.findIndex((obj) => {
        return obj._id === payload._id;
      });
      state.data.splice(index, 1);
    },
    fetchSpecificStudentsSuccess: (
      state,
      payload: { payload: IStudentRaw }
    ) => {
      state.specificStudent = payload;
    },
  },
});
export const {
  fetchStudentsSuccess,
  fetchSpecificStudentsSuccess,
  deleteStudentSuccess,
} = userSlice.actions;
export default userSlice.reducer;
