import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./state/Configurestore";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentFormContainer from "./containers/StudentFormContainer";
import RoutingHandler from "./helpers/history";
import StudentDashboard from "./components/studentDashboard";
import StudentForm from "./components/StudentForm";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4AAA9A",
      },
      secondary: {
        main: "#FF6897",
      },
    },
    typography: {
      fontFamily: "Poppins",
    },
  }) as any;
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <RoutingHandler />
            <Routes>
              <Route path="/" element={<StudentDashboard />} />
              <Route path="student" element={<StudentForm />} />
              <Route
                path="student/:studentId"
                element={<StudentFormContainer />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
