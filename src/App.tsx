import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state/Configurestore";
import StudentTableContainer from "./containers/StudentTableContainer";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <StudentTableContainer />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
