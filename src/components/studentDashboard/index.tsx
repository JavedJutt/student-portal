import { Container, Grid } from "@mui/material";
import SummaryContainer from "../../containers/SummaryContainer";
import TableContainer from "../../containers/TableContainer";
import Header from "./Header";

function StudentDashboard() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid>
          <h2>Student Portal </h2>
        </Grid>
      </Container>
      <hr />
      <Container maxWidth="lg">
        <Header />
        <SummaryContainer />
        <TableContainer />
      </Container>
    </div>
  );
}

export default StudentDashboard;
