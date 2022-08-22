import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useStyles from "./styles";
import { Avatar, ListItem } from "@mui/material";
const names = [
    "Oliver Hansen",
    "Van Henry",
  ];
export default function UserList({setSelectedAccess }) {
  const classes = useStyles();
  return (
    <List
      sx={{ width: "100%", bgcolor: "#FFFFFF", maxHeight: 140, overflow: 'scroll' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem>
        <ListItemText className={classes.list} primary="Select a person" />
      </ListItem>
      <List component="div" disablePadding>
        {names.map((name) => {
          return (
            <ListItemButton sx={{ pl: 4 }} onClick={() => setSelectedAccess(name)}>
              <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24, marginRight: 2 }} src="https://mui.com/static/images/avatar/3.jpg" />
              <ListItemText className={classes.list} primary={name} />
            </ListItemButton>
          );
        })}
      </List>
      <ListItem>
        <ListItemText className={classes.list} primary="Select a group" />
      </ListItem>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
        <Avatar sx={{ bgcolor: '#6B7280', width: 24, height: 24, fontSize: 12, marginRight: 2 }}>E</Avatar>
          <ListItemText className={classes.list} primary="Starred" />
        </ListItemButton>
      </List>
    </List>
  );
}
