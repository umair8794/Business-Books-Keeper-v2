import * as React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import { Box, TextField, Button, Alert, Snackbar } from "@mui/material";
import AppAvatar from "../common/AppAvatar";

import "./login.scss";
import { formValidation } from "../../shared/utils/formValidation";
import enums from "../../shared/utils/enum";

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
    isLoggingIn: false,
    invalidLogin: false,
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
      this.setState(validationResult);
      return;
    }

    this.setState({
      isLoggingIn: true,
    });

    database
      .login({
        username: formData.get("username"),
        password: formData.get("password"),
      })
      .then((loginResult) => {
        this.setState({
          isLoggingIn: false,
        });
        this.handleLoginResult(loginResult);
      });
  };

  handleLoginResult = (loginResult) => {
    if (!loginResult) {
      this.setState({
        invalidLogin: true,
      });
      return;
    }

    this.props.navigate(`/${enums.userTypes[loginResult.type]}`);
  };

  handleClearLoginResult = () => {
    this.setState({
      invalidLogin: false,
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
        <AppAvatar />

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
          <Snackbar
            open={this.state.invalidLogin}
            onClose={this.handleClearLoginResult}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            severity="error"
          >
            <Alert variant="filled" severity="error">
              Invalid username or password
            </Alert>
          </Snackbar>

          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={this.state.isLoggingIn}
          >
            Login
          </Button>
        </Box>
      </Box>
    );
  }
}

Login.propTypes = {
  navigate: PropTypes.func,
};

export default Login;
