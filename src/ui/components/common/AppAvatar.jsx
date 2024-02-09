import * as React from "react";
import { Typography, Avatar } from "@mui/material";

import { app as appResources } from "../../../resources";
import AppIcon from "../../assets/App-Icon.png";

class AppAvatar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Avatar
          src={AppIcon}
          sx={{ width: 96, height: 96 }}
          variant="square"
        ></Avatar>
        <Typography component="h1" variant="h5" sx={{ marginTop: 2 }}>
          {appResources.name}
        </Typography>
      </React.Fragment>
    );
  }
}

export default AppAvatar;
