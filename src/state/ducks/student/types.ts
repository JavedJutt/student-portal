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

export interface IAddStudentRaw {
  name: string;
  marks: number;
  subject: string;
  grade: string;
  time?: Date | string;
}

export const StudentActionTypes = {
  FETCH_STUDENTS: "@@students/FETCH_STUDENTS",
  ADD_STUDENT: "@@students/ADD_STUDENT",
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

// export interface IDispatchToPropsAddStudent {
//   addStudent: (data:IAddStudentRaw) => IAddMetaAction;
// }

export interface IDispatchToPropsAddStudent {
  addStudent: (data: IAddStudentRaw) => IAddMetaAction;
}
