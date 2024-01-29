import * as React from "react";
import { Component } from "react";
import { Typography, Box, Avatar, TextField, Button } from "@mui/material";
import { formValidation } from "../../shared/utils/formValidation";

import "./login.scss";
import AppIcon from "../../assets/App-Icon.png";
import appResources from "../../resources/app";

class Login extends Component {
  state = {
    username: {
      value: "",
      invalid: false,
      helperText: "",
    },
    password: {
      value: "",
      invalid: false,
      helperText: "",
    },
  };

  componentDidMount() {
    document.body.classList.add("no-margin");
  }

  componentWillUnmount() {
    document.body.classList.remove("no-margin");
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: {
        value: e.target.value,
        invalid: false,
        helperText: "",
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const validationResult = formValidation("login", formData);

    if (validationResult) {
      const updatedState = {};

      Object.keys(validationResult).forEach((fieldName) => {
        updatedState[fieldName] = {
          invalid: true,
          helperText: validationResult[fieldName],
        };
      });

      this.setState(updatedState);
      return;
    }

    database.login({
      username: formData.get("username"),
      password: formData.get("password"),
    });
  };

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
            label="Username"
            name="username"
            size="small"
            onChange={this.handleOnChange}
            error={this.state.username.invalid}
            helperText={
              this.state.username.invalid ? this.state.username.helperText : ""
            }
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            size="small"
            onChange={this.handleOnChange}
            error={this.state.password.invalid}
            helperText={
              this.state.password.invalid ? this.state.password.helperText : ""
            }
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
