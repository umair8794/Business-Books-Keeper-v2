import * as React from "react";
import { Typography, Avatar } from "@mui/material";

import { app as appResources } from "../../../resources";
import AppIcon from "../../assets/App-Icon.png";

class AppAvatar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Avatar
          aria-label="Logo"
          src={AppIcon}
          alt={appResources.name}
          sx={{ width: 96, height: 96 }}
          variant="square"
        ></Avatar>
        <Typography
          role="heading"
          aria-level="1"
          component="h1"
          variant="h5"
          sx={{ marginTop: 2 }}
        >
          {appResources.name}
        </Typography>
      </React.Fragment>
    );
  }
}

export default AppAvatar;
