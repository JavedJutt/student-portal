import { action } from "typesafe-actions";
import { StudentActionTypes } from "./types";

export const fetchStudents = () => {
  console.log("fetchstudents runs");
  return action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: "get",
    route: "/students",
  });
};
