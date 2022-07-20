import { MenuItem, Select } from "@mui/material";
import React from "react";
interface Iprops {
  label: string;
  dropdownData: string[];
  error: string | undefined;
}
function Dropdown({ label, dropdownData, error, ...rest }: Iprops) {
  // console.log(dropdownData);
  return (
    <>
      <label> {label}</label>
      <Select variant="outlined" sx={{ my: 1 }} fullWidth {...rest}>
        {dropdownData.map((data: string) => (
          <MenuItem key={data} value={data}>
            {" "}
            {data}
          </MenuItem>
        ))}
      </Select>
      {error && <p> {error}</p>}
    </>
  );
}

export default Dropdown;
