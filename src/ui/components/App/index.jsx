import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import defaultTheme from "../../theme";

import Login from "../Login";
import AdminPanel from "../AdminPanel";
import UserPanel from "../UserPanel";

const appTheme = createTheme(defaultTheme);

const App = () => {
  const navigator = useNavigate();

  return (
    <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Container component="div" maxWidth="xl" disableGutters>
          <Routes>
            <Route exact path="/" element={<Login navigate={navigator} />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/user" element={<UserPanel />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const Root = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
