import * as React from "react";
import { Component } from "react";
import { Typography, Box, Avatar, TextField, Button } from "@mui/material";

import "./login.scss";
import AppIcon from "../../assets/App-Icon.png";
import appResources from "../../resources/app";

class Login extends Component {
  state = {
    loginResult: "",
  };

  componentDidMount() {
    document.body.classList.add("no-margin");
  }

  componentWillUnmount() {
    document.body.classList.remove("no-margin");
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username") ?? "";
    const password = formData.get("password") ?? "";

    const validationResult =
      (username ?? `missing-username`) || (password ?? `missing-password`);

    if (validationResult) {
      this.setState({
        loginResult: validationResult,
      });

      return;
    }

    database.login({
      username,
      password,
    });
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
          onSubmit={this.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            size="small"
            error={this.state.loginResult === "missing-username"}
            helperText="Please enter username"
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
            error={this.state.loginResult === "missing-password"}
            helperText="Please enter password"
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
