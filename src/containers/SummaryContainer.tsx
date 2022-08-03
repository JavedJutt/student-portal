import React from "react";
import { useSelector } from "react-redux";
import Summary from "../components/studentDashboard/Summary";
import { IApplicationState } from "../state/ducks";
import { getStudentSummary } from "../state/ducks/student/selector";

function SummaryContainer() {
  const stateToProps: Record<string, object> = useSelector(
    ({ student }: IApplicationState) => ({
      summaryResult: getStudentSummary({ student }),
    })
  );
  return <Summary {...stateToProps} />;
}

export default SummaryContainer;
