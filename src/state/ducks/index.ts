import { combineReducers } from "redux";
import studentReducer from "./student/reducer";
import { all, fork } from "redux-saga/effects";
import studentSaga from "./student/saga";

export const rootReducer = combineReducers({
  student: studentReducer,
});

export function* rootSaga() {
  yield all([fork(studentSaga)]);
}
