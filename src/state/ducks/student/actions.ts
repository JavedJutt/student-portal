import { action } from "typesafe-actions";
import { IAddStudentRaw, StudentActionTypes } from "./types";

export const fetchStudents = () => {
  return action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: "get",
    route: "/students",
  });
};
export const fetchSpecificStudent = (id: string | undefined) => {
  return action(StudentActionTypes.FETCH_SPECIFIC_STUDENTS, [], {
    method: "get",
    route: "/students/" + id,
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
export const editStudent = (data: IAddStudentRaw) => {
  return action(
    StudentActionTypes.EDIT_STUDENT,
    { data },
    {
      method: "put",
      route: "/students/" + data._id,
    }
  );
};
export const deleteStudent = (data: IAddStudentRaw) => {
  console.log(" data from action", data);
  return action(
    StudentActionTypes.DELETE_STUDENT,
    { data },
    {
      method: "delete",
      route: "/students/" + data._id,
    }
  );
};
