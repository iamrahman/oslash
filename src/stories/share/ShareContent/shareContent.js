import { Grid, Typography } from "@mui/material";
import * as React from "react";
import useStyles from "./styles";
import ShareWeb from "./boxes/ShareWeb";
import SearchInput from "./boxes/SearchInput";
import OslashShare from "./boxes/OslashShare";
import Footer from "./boxes/Footer";
import SearchHeader from "./boxes/SearchHeader";
import UserList from "./boxes/UserList";
import oslashIcon from "../../assets/oslash.svg";
function ShareContent() {
  const classes = useStyles();
  const [searchKeyword, setSearchKeyword] = React.useState("");
  const [selectedAccess, setSelectedAccess] = React.useState(null);
  const [accessList, setAccessList] = React.useState([
    {
      name: "Everyone at Oslash",
      subHeading: "25 workspace members",
      icon: oslashIcon,
      accessType: "No access",
    },
  ]);
  const addNewAccess = (name, accessType, icon) => {
    setAccessList([...accessList, { name, accessType, icon, subHeading: null }]);
  };
  console.log({accessList})
  return (
    <Grid container direction="column" className={classes.root}>
      {searchKeyword.length || selectedAccess ? (
        <React.Fragment>
          <Grid item style={{ height: 65, borderTop: `1px solid #E5E7EB` }}>
            <SearchHeader
              searchKeyword={searchKeyword}
              setSelectedAccess={setSelectedAccess}
              addNewAccess={addNewAccess}
              selectedAccess={selectedAccess}
              setSearchKeyword={setSearchKeyword}
            />
          </Grid>
          <Grid item>
            <UserList
              setSelectedAccess={setSelectedAccess}
              selectedAccess={selectedAccess}
            />
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid item style={{ width: "100%" }}>
            <ShareWeb />
          </Grid>
          <Grid item>
            <SearchInput
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
          </Grid>
          {accessList.map((list) => {
            return (
              <Grid item>
                <OslashShare
                  icon={list.icon}
                  name={list.name}
                  subHeading={list.subHeading}
                  accessType={list.accessType}
                />
              </Grid>
            );
          })}
          {/* <Grid item>
            <OslashShare />
          </Grid> */}
        </React.Fragment>
      )}
      <Grid item style={{ height: 48, borderTop: `1px solid #E5E7EB` }}>
        <Footer searchKeyword={searchKeyword} />
      </Grid>
    </Grid>
  );
}
export default ShareContent;
