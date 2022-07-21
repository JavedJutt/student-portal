import { action } from "typesafe-actions";
import { IAddStudentRaw, StudentActionTypes } from "./types";

export const fetchStudents = () => {
  return action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: "get",
    route: "/students",
  });
};

export const addStudent = (data: IAddStudentRaw) => {
  return action(
    StudentActionTypes.ADD_STUDENT,
    { data },
    {
      method: "post",
      route: "/students",
    }
  );
};
