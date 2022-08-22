import React from "react";
import oslashIcon from "../../../assets/oslash.svg";
import { Grid, Typography, Button, Menu, MenuItem } from "@mui/material";
import useStyles from "./styles";
import DownIcon from "../../../assets/down.svg";
function OslashShare({name, icon, subHeading, accessType}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type) => {
    setAnchorEl(null);
  };
  return (
    <Grid container justifyContent="space-between" style={{ padding: 4, paddingLeft: 12, paddingRight: 12 }}>
      <Grid item xs={9}>
        <Grid container justifyContent="left" alignItems="center">
          <Grid item>
            <img src={icon} alt="icon" style={{ borderRadius: 50, width: 42 }} />
          </Grid>
          <Grid item style={{ marginLeft: 8 }}>
            <Typography className={classes.heading}>
              {name}
            </Typography>
            <Typography className={classes.subHeading}>
              {subHeading}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ textTransform: "none", width: "100%", color: '#6B7280' }}
        >
          <span style={{marginRight: 6}}>{accessType}</span><img src={DownIcon} />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={() => handleClose("Full access")}>
            Full access
          </MenuItem>
          <MenuItem onClick={() => handleClose("Can edit")}>Can edit</MenuItem>
          <MenuItem onClick={() => handleClose("Can view")}>Can view</MenuItem>
          <MenuItem
            onClick={() => handleClose("No access")}
            style={{ color: "red" }}
          >
            No access
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
}
export default OslashShare;
