import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import apiCaller from "../../utils/apiCaller";
import { FETCH_STUDENTS_SUCCESS } from "./reducer";
import { IStudentRaw, StudentActionTypes } from "./types";

function* handleFetch(action: any): Generator {
  console.log("handle fetch run");
  try {
    const res: IStudentRaw[] | any = yield call(
      apiCaller,
      action.meta.method,
      action.meta.route
    );
    console.log("Api data ==> ", res);
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
