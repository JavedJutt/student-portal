import { combineReducers } from "redux";
import studentReducer from "./student/reducer";
import { all, fork } from "redux-saga/effects";
import studentSaga from "./student/saga";
import { IStudentState2 } from "./student/types";

export interface IApplicationState {
  student: IStudentState2;
}
export const rootReducer = combineReducers<IApplicationState>({
  student: studentReducer,
});

export function* rootSaga() {
  yield all([fork(studentSaga)]);
}
