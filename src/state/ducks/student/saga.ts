import { all, fork, takeEvery } from "redux-saga/effects";

function* handleFetch() {
  try {
    yield console.log("Hello Sagas!");
  } catch {}
}

function* watchFetchRequest(): Generator {
  yield takeEvery("EDIT", handleFetch);
}

export default function* studentSaga() {
  yield all([fork(watchFetchRequest)]);
}
