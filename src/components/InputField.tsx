import { TextField } from "@mui/material";
import React from "react";

interface IProps {
  placeholder: string;
  label: string;
  error: string | undefined;
}

function InputField({ label, error, ...rest }: IProps) {
  // console.log("rest ==>", rest);

  return (
    <>
      <label> {label} </label>
      <TextField sx={{ my: 1 }} variant="outlined" fullWidth {...rest} />
      {error && <p>{error}</p>}
    </>
  );
}

export default InputField;
