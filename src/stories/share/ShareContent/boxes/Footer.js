import React from "react";
import questionIcon from "../../../assets/question.svg";
import linkIcon from "../../../assets/link.svg";
import { Grid, Typography } from "@mui/material";
import useStyles from "./styles";
function Footer({ searchKeyword }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: 12, background: "#F9FAFB" }}
    >
      <Grid item>
        <Typography className={classes.subHeading}>
          <img src={questionIcon} alt="icon" /> learn about sharing
        </Typography>
      </Grid>
      {searchKeyword.length === 0 && (
        <Grid item>
          <Typography>
            <img src={linkIcon} alt="icon" style={{marginRight: 4}} /> Copy link
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default Footer;
