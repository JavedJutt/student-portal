import { Box, ThemeProvider } from "@mui/material";
import React from "react";
interface IProps {
  title: string;
  summary: string;
  isGreen: boolean;
}

function SummaryBox({ title, summary, isGreen }: IProps) {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: "inline",
          height: 99,
          width: 146,
          borderRadius: "6px",
          color: "white",
          bgcolor: isGreen ? "#4AAA9A" : "#FF6897",
          textAlign: "center",
        }}
      >
        <h4>{title}</h4>
        <h3>{summary}</h3>
      </Box>
    </>
  );
}

export default SummaryBox;
