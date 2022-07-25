import { createSlice } from "@reduxjs/toolkit";
import { IStudentRaw } from "./types";
export const userSlice = createSlice({
  name: "student",

  initialState: {
    data: [
      {
        _id: 1,
        name: "Javed",
        marks: 100,
        subject: "Math",
        grade: "A+",
        time: "2022-07-18T08:07:28.3Z",
      },
      {
        _id: 2,
        name: "Ahmad",
        marks: 80,
        subject: "English",
        grade: "B+",
        time: "2022-07-18T08:07:28.3Z",
      },
      {
        _id: 3,
        name: "zakria",
        marks: 40,
        subject: "English",
        grade: "F",
        time: "2022-07-18T08:07:28.3Z",
      },
    ],
    specificStudent: {},
  },

  reducers: {
    fetchStudentsSuccess: (
      state,
      { payload }: { payload: IStudentRaw[] | any }
    ) => {
      console.log("reducer action playload ", { payload });

      state.data = [...payload];
      console.log("2", state.data);
    },
    deleteStudentSuccess: (
      state,
      { payload }: { payload: IStudentRaw[] | any }
    ) => {
      console.log("reducer delete action playload ", payload);
      const index = state.data.findIndex((obj) => {
        return obj._id === payload._id;
      });
      state.data.splice(index, 1);
      console.log("index ", state.data);
    },
    fetchSpecificStudentsSuccess: (
      state,
      payload: { payload: IStudentRaw }
    ) => {
      console.log("10 data in reducer action ", state.specificStudent);
      state.specificStudent = payload;
      console.log("10 data in reducer action ", state.specificStudent);
    },
  },
});
export const {
  fetchStudentsSuccess,
  fetchSpecificStudentsSuccess,
  deleteStudentSuccess,
} = userSlice.actions;
export default userSlice.reducer;
