import * as React from "react";
import { createRoot } from "react-dom/client";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import defaultTheme from "../theme";

import Login from "./account/Login";

const appTheme = createTheme(defaultTheme);

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <Container component="div" maxWidth="xl" disableGutters>
          <Login />
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
