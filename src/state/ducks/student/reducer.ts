import { createSlice } from "@reduxjs/toolkit";
import { IStudentRaw } from "./types";
export const userSlice = createSlice({
  name: "student",

  initialState: {
    list: [] as IStudentRaw[],
    specificStudent: {},
  },

  reducers: {
    fetchStudentsSuccess: (
      state,
      { payload }: { payload: IStudentRaw[] | any }
    ) => {
      state.list = [...payload];
    },
    deleteStudentSuccess: (
      state,
      { payload }: { payload: IStudentRaw[] | any }
    ) => {
      state.list = state.list.filter((student) => student._id !== payload._id);
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
