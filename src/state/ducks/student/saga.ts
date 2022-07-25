import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { apiCaller } from "../../utils/apiCaller";
import {
  deleteStudentSuccess,
  fetchSpecificStudentsSuccess,
  fetchStudentsSuccess,
} from "./reducer";
import { navigate } from "../../../helpers/history";
import { IStudentRaw, StudentActionTypes } from "./types";

function* handleFetch(action: any): Generator {
  try {
    const res: IStudentRaw[] | any = yield call(
      apiCaller,
      action.meta.method,
      action.meta.route
    );

    yield put(fetchStudentsSuccess(res));
  } catch {}
}

function* handleSpecificFetch(action: any): Generator {
  try {
    const res: IStudentRaw | any = yield call(
      apiCaller,
      action.meta.method,
      action.meta.route
    );

    yield put(fetchSpecificStudentsSuccess(res));
  } catch {}
}

function* handleAdd(action: any): Generator {
  try {
    yield call(
      apiCaller,
      action.meta.method,
      action.meta.route,
      action.payload.data
    );

    navigate("/");
  } catch {}
}
function* handleEdit(action: any): Generator {
  try {
    yield call(
      apiCaller,
      action.meta.method,
      action.meta.route,
      action.payload.data
    );
  } catch {
    navigate("/");
  }
}
function* handleDelete(action: any): Generator {
  try {
    yield call(
      apiCaller,
      action.meta.method,
      action.meta.route,
      action.payload.data
    );
    yield put(deleteStudentSuccess(action.payload.data));
  } catch {}
}

function* watchFetchRequest(): Generator {
  yield takeEvery(StudentActionTypes.FETCH_STUDENTS, handleFetch);
  yield takeEvery(StudentActionTypes.ADD_STUDENT, handleAdd);
  yield takeEvery(StudentActionTypes.EDIT_STUDENT, handleEdit);
  yield takeEvery(StudentActionTypes.DELETE_STUDENT, handleDelete);
  yield takeEvery(
    StudentActionTypes.FETCH_SPECIFIC_STUDENTS,
    handleSpecificFetch
  );
}

export default function* studentSaga() {
  yield all([fork(watchFetchRequest)]);
}
