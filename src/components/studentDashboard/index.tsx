import TableContainer from "../../containers/TableContainer";
import Header from "./Header";
import Summary from "./Summary";

function StudentDashboard() {
  return (
    <div>
      <Header />
      <Summary />
      <TableContainer />
    </div>
  );
}

export default StudentDashboard;
