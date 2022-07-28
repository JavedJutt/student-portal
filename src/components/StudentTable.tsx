import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import { IAddStudentRaw, IStudentRaw } from "../state/ducks/student/types";
import { specificDate } from "../helpers";
import { colors } from "../helpers/data";
import { navigate } from "../helpers/history";
import ActionMenu from "./common/ActionMenu";
import SummaryBox from "./common/SummaryBox";

function StudentTable() {
  return <div></div>;
}

export default React.memo(StudentTable);
