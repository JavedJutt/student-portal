import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state/Configurestore";
import StudentTableContainer from "./containers/StudentTableContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StudentTableContainer />} />
            <Route path="/students" element={<AddStudent />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
