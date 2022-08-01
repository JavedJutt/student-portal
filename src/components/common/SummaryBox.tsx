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
          height: "99px",
          // maxWidth: "146px",
          p: "1px",
          borderRadius: "6px",
          color: "white",
          bgcolor,
          fontFamily,
          textAlign: "center",
        }}
      >
        <h4>{title}</h4>
        <h3>{summaryResult}</h3>
      </Box>
    </>
  );
}

export default SummaryBox;
