import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import SummaryBox from "../common/SummaryBox";

function Summary({ summaryResult }: any) {
  const theme = useTheme();
  return (
    <Grid container direction="row" my={"20px"} justifyContent="space-between">
      <Grid item md={2} xs={6}>
        <SummaryBox
          title="Top Grade"
          summaryResult={summaryResult.highestGrade}
          fontFamily={theme.typography.fontFamily}
          bgcolor={theme.palette.primary.main}
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <SummaryBox
          title="Most Passed"
          summaryResult={summaryResult.mostPassedSubject}
          fontFamily={theme.typography.fontFamily}
          bgcolor={theme.palette.primary.main}
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <SummaryBox
          title="Lowest Grade"
          summaryResult={summaryResult.lowestGrade}
          fontFamily={theme.typography.fontFamily}
          bgcolor={theme.palette.secondary.main}
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <SummaryBox
          title="Most Failed"
          summaryResult={summaryResult.mostFailedSubject}
          fontFamily={theme.typography.fontFamily}
          bgcolor={theme.palette.secondary.main}
        />
      </Grid>
    </Grid>
  );
}

export default Summary;
