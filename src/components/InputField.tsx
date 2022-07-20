import { TextField } from "@mui/material";
import React from "react";

interface IProps {
  placeholder: string;
  label: string;
}

function InputField({ label, ...rest }: IProps) {
  console.log(rest);

  return (
    <>
      <label> {label} </label>
      <TextField sx={{ my: 1 }} variant="outlined" fullWidth {...rest} />
    </>
  );
}

export default InputField;
