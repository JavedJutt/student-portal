import { MetaAction, TypeConstant } from "typesafe-actions";

export interface IStudentState {
  list: IStudentRaw[];
}
export interface IStudentStateModified {
  list: IStudentRaw[];
  specificStudent: IStudentRaw | any;
}

export type ApiResponse = Record<string, any>;
export interface IStudentRaw extends ApiResponse {
  _id: number;
  name: string;
  marks: number;
  subject: string;
  grade: string;
  time: string;
}

export interface IAddStudentRaw {
  _id?: string;
  name: string;
  marks: number;
  subject: string;
  grade: string;
  time?: Date | string;
}

export const StudentActionTypes = {
  FETCH_STUDENTS: "@@students/FETCH_STUDENTS",
  FETCH_SPECIFIC_STUDENTS: "@@students/FETCH_SPECIFIC_STUDENTS",
  ADD_STUDENT: "@@students/ADD_STUDENT",
  EDIT_STUDENT: "@@students/EDIT_STUDENT",
  DELETE_STUDENT: "@@students/DELETE_STUDENT",
};

export interface IMeta {
  method: string;
  route: string;
}
export interface IAddMeta extends IMeta {
  payload: IAddStudentRaw;
}
export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}
export interface IAddMetaAction extends MetaAction<TypeConstant, IAddMeta> {}
export interface IDispatchToProps {
  fetchStudents: () => IMetaAction;
}
export interface IDispatchToPropsAddStudent {
  addStudent: (data: IAddStudentRaw) => IAddMetaAction;
}

export interface ISummary {
  highestGrade: string;
  lowestGrade: string;
  mostPassedSubject: string;
  mostFailedSubject: string;
}
