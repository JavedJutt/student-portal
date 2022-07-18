import { MetaAction, TypeConstant } from "typesafe-actions";

export interface IStudentState {
  readonly data: IStudentRaw[];
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

export const StudentActionTypes = {
  FETCH_STUDENTS: "@@students/FETCH_STUDENTS",
};

interface IMeta {
  method: string;
  route: string;
}
interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}
export interface IDispatchToProps {
  fetchStudents: () => IMetaAction;
}
