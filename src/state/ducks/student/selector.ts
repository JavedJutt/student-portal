import { createSelector } from "reselect";
import { IApplicationState } from "..";
import { gradesPresidance } from "../../../helpers/data";

const getList = (state: IApplicationState) => state.student.list;

export const getStudentSummary = createSelector(getList, (list) => {
  console.log("student list ", getList, " summary ", list);

  let highestGrade = "--";
  let lowestGrade = "--";

  for (let item of list) {
    if (gradesPresidance.indexOf(item.grade) !== 0) {
      if (highestGrade === "--") highestGrade = item.grade;
      else if (
        gradesPresidance.indexOf(item.grade) >
        gradesPresidance.indexOf(highestGrade)
      )
        highestGrade = item.grade;
    }
  }
  console.log("highest grade", highestGrade);
});