import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import SummaryBox from "../common/SummaryBox";
import { ISummary } from "../../state/ducks/student/types";

function Summary({ summaryResult }: { summaryResult: ISummary }) {
  const theme = useTheme();
  return (
    <Grid container direction="row" my={"20px"} justifyContent="space-between">
      <Grid item md={1.5} xs={5}>
        <SummaryBox
          title="Top Grade"
          summaryResult={summaryResult.highestGrade}
          bgcolor={theme.palette.primary.main}
        />
      </Grid>
      <Grid item md={1.5} xs={5}>
        <SummaryBox
          title="Most Passed"
          summaryResult={summaryResult.mostPassedSubject}
          bgcolor={theme.palette.primary.main}
        />
      </Grid>
      <Grid item md={1.5} xs={5}>
        <SummaryBox
          title="Lowest Grade"
          summaryResult={summaryResult.lowestGrade}
          bgcolor={theme.palette.secondary.main}
        />
      </Grid>
      <Grid item md={1.5} xs={5}>
        <SummaryBox
          title="Most Failed"
          summaryResult={summaryResult.mostFailedSubject}
          bgcolor={theme.palette.secondary.main}
        />
      </Grid>
    </Grid>
  );
}

export default Summary;
