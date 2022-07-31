import { Grid, Button } from "@mui/material";
import React from "react";
import { navigate } from "../../helpers/history";
import { addDatabtn, heading } from "./styles";

function Header() {
  return (
    <>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item sx={heading}>
          Student Summary
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={addDatabtn}
            onClick={() => {
              navigate("/student");
            }}
          >
            + Add Data
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
