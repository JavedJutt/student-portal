import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import apiCaller from "../../utils/apiCaller";
import { FETCH_STUDENTS_SUCCESS } from "./reducer";
import { StudentActionTypes } from "./types";

function* handleFetch(action: any): any {
  console.log("handle fetch run");
  try {
    const res = yield call(apiCaller, action.meta.method, action.meta.route);
    console.log("res=> ", res);
    yield put(FETCH_STUDENTS_SUCCESS(res));
  } catch {}
}

function* watchFetchRequest(): Generator {
  console.log("watcher saga run");
  yield takeEvery(StudentActionTypes.FETCH_STUDENTS, handleFetch);
}

export default function* studentSaga() {
  console.log(" student saga run");
  yield all([fork(watchFetchRequest)]);
}
