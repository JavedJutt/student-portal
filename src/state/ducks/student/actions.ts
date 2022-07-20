import { action } from "typesafe-actions";
import { StudentActionTypes } from "./types";

export const fetchStudents = () => {
  return action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: "get",
    route: "/students",
  });
};

export const addStudent = () => {
  return action(StudentActionTypes.ADD_STUDENT, [], {
    method: "get",
    route: "/students",
  });
};
