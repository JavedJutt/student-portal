import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state/Configurestore";
import StudentTableContainer from "./containers/StudentTableContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentFormContainer from "./containers/StudentFormContainer";
import RoutingHandler from "./helpers/history";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <RoutingHandler />
          <Routes>
            <Route path="/" element={<StudentTableContainer />} />
            <Route path="student" element={<StudentFormContainer />} />
            <Route
              path="student/:studentId"
              element={<StudentFormContainer />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
