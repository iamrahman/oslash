import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useStyles from "./styles";
import DownIcon from "../../../assets/down.svg";
import { Box, Chip, FormControl, OutlinedInput, Select, TextField } from "@mui/material";
function SearchHeader({ setSearchKeyword, setSelectedAccess, searchKeyword, selectedAccess, addNewAccess }) {
  const classes = useStyles();
  const searchRef = React.createRef();
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [accessType, setAccessType] = React.useState("No access");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type) => {
    setAccessType(type);
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: 12, background: "#F9FAFB" }}
    >
      <Grid item xs={7}>
         <FormControl variant="outlined" style={{ width: "100%" }}>
          <OutlinedInput
            id="outlined-adornment-weight"
            value={searchKeyword}
            ref={searchRef}
            onChange={(event) => setSearchKeyword(event.target.value)}
            style={{ height: 40, paddingRight: 0 }}
            startAdornment={
                selectedAccess && <Chip label={selectedAccess} onDelete={() => setSelectedAccess(null)}/>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
              placeholder: "People, email, groups",
              style: {
                width: "100%",
                height: 30,
                background: "#F9FAFB",
                border: "none",
              }
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ textTransform: "none", width: "100%" }}
        >
          {accessType} <img src={DownIcon} />
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
      <Grid item xs={2}>
        <Button
          style={{ color: "black", background: "white", textTransform: "none" }}
          onClick={() => {
            setSearchKeyword("");
            setSelectedAccess(null);
            addNewAccess(selectedAccess, accessType, 'https://mui.com/static/images/avatar/3.jpg');
          }}
        >
          Invite
        </Button>
      </Grid>
    </Grid>
  );
}

export default SearchHeader;
