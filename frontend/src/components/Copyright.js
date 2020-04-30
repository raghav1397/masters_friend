import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import * as routes from "../constants/routes";

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href={routes.LANDING}>
          Masters Friend
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }