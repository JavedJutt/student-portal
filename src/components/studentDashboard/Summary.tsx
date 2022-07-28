import { Box } from "@mui/material";
import React from "react";
import SummaryBox from "../common/SummaryBox";

function Summary(summaryResult: Record<string, string>) {
  return (
    <>
      <Box
        sx={{
          my: 4,
          height: 100,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <SummaryBox
          title="Top Grade"
          summaryResult={summaryResult.highestGrade}
          isGreen={true}
        />
        <SummaryBox
          title="Most Passed"
          summaryResult={summaryResult.mostPassedSubject}
          isGreen={true}
        />
        <SummaryBox
          title="Lowest Grade"
          summaryResult={summaryResult.lowestGrade}
          isGreen={false}
        />
        <SummaryBox
          title="Most Failed"
          summaryResult={summaryResult.mostFailedSubject}
          isGreen={false}
        />
      </Box>
    </>
  );
}

export default Summary;
