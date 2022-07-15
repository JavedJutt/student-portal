import { createSlice } from "@reduxjs/toolkit";
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
        time: "Jul 15, 2022 at 07.58 PM",
      },
      {
        _id: 2,
        name: "Ahmad",
        marks: 80,
        subject: "English",
        grade: "A-",
        time: "Jul 15, 2022 at 07.58 PM",
      },
    ],
    loading: false,
  },

  reducers: {
    FETCH_STUDENTS: (state) => {
      console.log("fetch student run");
      return { ...state, loading: true };
    },
    FETCH_STUDENTS_SUCCESS: (state, { payload }: any) => {
      state.data = payload.concat(state.data);
    },
  },
});
export const { FETCH_STUDENTS_SUCCESS } = userSlice.actions;
export default userSlice.reducer;
