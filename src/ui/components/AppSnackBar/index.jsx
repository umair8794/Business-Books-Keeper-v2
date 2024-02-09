import * as React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { Snackbar, Alert } from "@mui/material";

class AppSnackBar extends Component {
  render() {
    return (
      <Snackbar
        open={this.props.openWhen}
        onClose={this.props.handleOnClose}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        severity={this.props.type}
      >
        <Alert variant="filled" severity={this.props.type}>
          {this.props.message}
        </Alert>
      </Snackbar>
    );
  }
}

AppSnackBar.propTypes = {
  openWhen: PropTypes.bool,
  handleOnClose: PropTypes.func,
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  message: PropTypes.string,
};

export default AppSnackBar;
