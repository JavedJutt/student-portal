import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
interface Iprops {
  label: string;
  dropdownData: string[];
  error: string | undefined;
}
function SelectFeild({ label, dropdownData, error, ...rest }: Iprops) {
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
      {error && (
        <Box component="div" color="#d32f2f" sx={{ mb: 1, display: "block" }}>
          {error}
        </Box>
      )}
    </>
  );
}

export default SelectFeild;
