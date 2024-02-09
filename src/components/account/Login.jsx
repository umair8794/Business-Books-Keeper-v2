import * as React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import { Box, TextField, Button } from "@mui/material";
import AppAvatar from "../common/AppAvatar";
import AppSnackBar from "../common/AppSnackBar";

import { defineForm, validateForm, retrieveFormValues } from "../../ui/forms";
import enums from "../../utils/enum";

class Login extends Component {
  constructor(props) {
    super(props);
    this.formId = "login";
    this.formDefinition = defineForm(this.formId);

    const initialState = {
      isLoggingIn: false,
      isInvalidLogin: false,
    };

    Object.keys(this.formDefinition).forEach((formField) => {
      initialState[formField] = {
        value: "",
        invalid: false,
        helperText: "",
      };
    });

    this.state = initialState;
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
    const validationResult = validateForm(this.formId, formData);

    if (validationResult) {
      this.setState(validationResult);
      return;
    }

    this.setState({
      isLoggingIn: true,
    });

    const credentials = retrieveFormValues(this.formId, formData);

    database.login(credentials).then((loginResult) => {
      this.setState({
        isLoggingIn: false,
      });
      this.handleLoginResult(loginResult);
    });
  };

  handleLoginResult = (loginResult) => {
    if (!loginResult) {
      this.setState({
        isInvalidLogin: true,
      });
      return;
    }

    this.props.navigate(`/${enums.userTypes[loginResult.type]}`);
  };

  handleClearLoginResult = () => {
    this.setState({
      isInvalidLogin: false,
    });
  };

  render() {
    const formDef = this.formDefinition;
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
          {Object.keys(formDef).map((formField, index) => {
            return (
              <TextField
                key={formDef[formField].name}
                margin="normal"
                required
                fullWidth
                label={formDef[formField].label}
                name={formDef[formField].name}
                type={formDef[formField].type}
                size="small"
                onChange={this.handleOnChange}
                error={this.state[formField].invalid}
                helperText={
                  this.state[formField].invalid
                    ? this.state[formField].helperText
                    : ""
                }
                autoFocus={index === 0}
              />
            );
          })}

          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={this.state.isLoggingIn}
          >
            Login
          </Button>

          <AppSnackBar
            openWhen={this.state.isInvalidLogin}
            handleOnClose={this.handleClearLoginResult}
            type="error"
            message="Invalid username or password"
          />
        </Box>
      </Box>
    );
  }
}

Login.propTypes = {
  navigate: PropTypes.func,
};

export default Login;
