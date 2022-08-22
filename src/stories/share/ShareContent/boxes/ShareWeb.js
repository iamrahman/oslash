import React from "react";
import shareIcon from "../../../assets/shareIcon.svg";
import Switch from "@mui/material/Switch";
import { Grid, Typography } from "@mui/material";
import useStyles from "./styles";
function ShareToWeb() {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="space-between"
      style={{ borderBottom: "1px solid gray", padding: 12 }}
    >
      <Grid item xs={10}>
        <Grid container justifyContent="left" alignItems="center">
          <Grid item>
            <img src={shareIcon} alt="icon" />
          </Grid>
          <Grid item style={{ marginLeft: 8 }}>
            <Typography className={classes.heading}>Share to web</Typography>
            <Typography className={classes.subHeading}>
              Public and share link with anyone.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Switch />
      </Grid>
    </Grid>
  );
}
export default ShareToWeb;