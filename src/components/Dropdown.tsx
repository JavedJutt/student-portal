import { MenuItem, Select } from "@mui/material";
import React from "react";
interface Iprops {
  label: string;
  dropdownData: string[];
}
function Dropdown({ label, dropdownData, ...rest }: Iprops) {
  console.log(dropdownData);
  return (
    <>
      <label> {label}</label>
      <Select variant="outlined" sx={{ my: 1 }} fullWidth {...rest}>
        {dropdownData.map((data: string) => (
          <MenuItem value={data}> {data}</MenuItem>
        ))}
      </Select>
    </>
  );
}

export default Dropdown;
