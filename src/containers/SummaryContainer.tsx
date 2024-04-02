import React from "react";
import { useSelector } from "react-redux";
import Summary from "../components/studentDashboard/Summary";
import { IApplicationState } from "../state/ducks";
import { getStudentSummary } from "../state/ducks/student/selector";
import { ISummary } from "../state/ducks/student/types";

function SummaryContainer() {
  const stateToProps: { summaryResult: ISummary } = useSelector(
    ({ student }: IApplicationState) => ({
      summaryResult: getStudentSummary({ student }),
    })
  );
  return <Summary {...stateToProps} />;
}

export default SummaryContainer;
