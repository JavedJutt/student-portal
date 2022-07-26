import { createSelectorCreator } from "reselect";
import { IStudentRaw } from "./types";

const selectStudentList = (state: { student: { list: IStudentRaw } }) =>
  state.student.list;

export const getStudentSummary = createSelectorCreator(
  selectStudentList,
  (studentSummary) => {}
);
