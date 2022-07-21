import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state/Configurestore";
import StudentTableContainer from "./containers/StudentTableContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudentContainer from "./containers/AddSudentContainer";
import RoutingHandler from "./helpers/history";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <RoutingHandler />
          <Routes>
            <Route path="/" element={<StudentTableContainer />} />
            <Route path="/students" element={<AddStudentContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
