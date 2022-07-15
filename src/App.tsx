import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state/Configurestore";
import StudentTableContainer from "./containers/StudentTableContainer";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    return () => {
      console.log("Unmount called App");
    };
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <StudentTableContainer />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
