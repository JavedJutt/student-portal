import { Box } from "@mui/material";
import React from "react";
interface IProps {
  title: string;
  summaryResult: string;
  bgcolor: string | any;
  fontFamily: string | undefined;
}

function SummaryBox({ title, bgcolor, summaryResult, fontFamily }: IProps) {
  return (
    <>
      <Box
        component="div"
        sx={{
          py: "1px",
          borderRadius: "6px",
          color: "white",
          bgcolor,
          fontFamily,
          textAlign: "center",
        }}
      >
        <p>{title}</p>
        <p>{summaryResult}</p>
      </Box>
    </>
  );
}

export default SummaryBox;
