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
  },

  reducers: {
    FETCH_STUDENTS_SUCCESS: (
      state,
      { payload }: { payload: IStudentRaw[] | any }
    ) => {
      // let x = { payload };
      // console.log("5. {payload} ", x);
      state.data = state.data.concat(payload);
    },
  },
});
export const { FETCH_STUDENTS_SUCCESS } = userSlice.actions;
export default userSlice.reducer;
