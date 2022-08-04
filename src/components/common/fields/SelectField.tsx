import { Box, MenuItem, Select, useTheme } from "@mui/material";
import React from "react";
interface Iprops {
  label: string;
  dropdownData: string[];
  error: string | undefined;
}
function SelectField({ label, dropdownData, error, ...rest }: Iprops) {
  const theme = useTheme();
  return (
    <>
      <label> {label}</label>
      <Select
        variant="outlined"
        sx={{
          my: 1,
          "&:focus": {
            border: "1px solid red",
          },
        }}
        fullWidth
        {...rest}
      >
        {dropdownData.map((data: string) => (
          <MenuItem
            key={data}
            value={data}
            sx={{
              "&:hover": {
                bgcolor: theme.palette.primary.main,
              },
            }}
          >
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

export default SelectField;
