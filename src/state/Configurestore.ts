import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, rootSaga } from "./ducks/index";
import sagaMiddleware from "./middelware/saga";

const middleware = [sagaMiddleware];
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export default store;
