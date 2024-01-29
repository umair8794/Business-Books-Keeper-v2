import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import defaultTheme from "../theme";

import Login from "./account/Login";
import AdminPanel from "./user/AdminPanel";
import UserPanel from "./user/UserPanel";

const appTheme = createTheme(defaultTheme);

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <Container component="div" maxWidth="xl" disableGutters>
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/user" element={<UserPanel />} />
            </Routes>
          </HashRouter>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
