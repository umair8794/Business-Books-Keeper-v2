import * as React from "react";
import { Component } from "react";
import { Typography, Box, Avatar, TextField, Button } from "@mui/material";

import "./login.scss";
import AppIcon from "../../assets/App-Icon.png";
import appResources from "../../resources/app";

class Login extends Component {
  componentDidMount() {
    document.body.classList.add("no-margin");
  }

  componentWillUnmount() {
    document.body.classList.remove("no-margin");
  }

  render() {
    return (
      <Box
        height="100vh"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src={AppIcon}
          sx={{ width: 96, height: 96 }}
          variant="square"
        ></Avatar>
        <Typography component="h1" variant="h5" sx={{ marginTop: 2 }}>
          {appResources.name}
        </Typography>
        <Box
          component="form"
          textAlign="center"
          //   onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="email"
            size="small"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            size="small"
          />
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    );
  }
}

export default Login;
