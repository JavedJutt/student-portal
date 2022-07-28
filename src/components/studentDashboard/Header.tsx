import { Button, Grid } from "@mui/material";
import React from "react";
import { navigate } from "../../helpers/history";

function Header() {
  return (
    <>
      <Grid sx={{ display: "inline", justifyContent: "flex-start" }}>
        <h1> Student Summary </h1>
      </Grid>
      <Grid sx={{ display: "inline", justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          sx={{ color: "#343744", mr: "100px", mt: "20px" }}
          onClick={() => {
            navigate("/student");
          }}
        >
          + Add Data
        </Button>
      </Grid>
    </>
  );
}

export default Header;
