import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, rootSaga } from "./ducks/index";
import sagaMiddleware from "./middelware/saga";

const middleware = [sagaMiddleware];
console.log("before store configured");
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
console.log("store configured and calling root saga");
sagaMiddleware.run(rootSaga);

export default store;
