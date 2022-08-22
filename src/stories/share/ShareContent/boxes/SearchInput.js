import React from "react";
import { Button, FormControl, Grid, OutlinedInput } from "@mui/material";
function SearchInput({searchKeyword, setSearchKeyword}) {
  return (
    <Grid container style={{ padding: `12px 14px 12px 14px` }}>
      <Grid item style={{ width: "100%" }}>
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <OutlinedInput
            id="outlined-adornment-weight"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
            style={{ height: 32, paddingRight: 0 }}
            endAdornment={
              <Button
                position="end"
                style={{ background: "#F9FAFB", color: "#374151", textTransform: "none" }}
              >
                Invite
              </Button>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
              placeholder: "People, email, groups",
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default SearchInput;
