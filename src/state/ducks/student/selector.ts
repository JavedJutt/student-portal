import { createSelector } from "reselect";
import { IApplicationState } from "..";
import { get, set } from "lodash";
import { gradesPresidance } from "../../../helpers/data";

const getList = (state: IApplicationState) => state.student.list;

export const getStudentSummary = createSelector(getList, (list) => {
  console.log("student list ", getList, " summary ", list);

  let highestGrade = "--";
  let lowestGrade = "--";
  let summary: Record<string, string> = {};
  list.forEach((item) => {
    if (!summary[item.subject]) {
      if (item.grade === "F") {
        set(summary, `${item.subject}`, {
          pass: 0,
          fail: 1,
        });
      } else {
        set(summary, `${item.subject}.pass`, 1);
        set(summary, `${item.subject}.fail`, 0);
      }
    } else {
      if (item.grade === "F") {
        set(
          summary,
          `${item.subject}.fail`,
          get(summary, `${item.subject}.fail`) + 1
        );
      } else {
        set(
          summary,
          `${item.subject}.pass`,
          get(summary, `${item.subject}.pass`) + 1
        );
      }
    }

    if (gradesPresidance.indexOf(item.grade) !== 0) {
      if (lowestGrade === "--") lowestGrade = item.grade;
      else if (
        gradesPresidance.indexOf(item.grade) <
        gradesPresidance.indexOf(lowestGrade)
      )
        lowestGrade = item.grade;
      if (highestGrade === "--") highestGrade = item.grade;
      else if (
        gradesPresidance.indexOf(item.grade) >
        gradesPresidance.indexOf(highestGrade)
      )
        highestGrade = item.grade;
    } else {
      lowestGrade = item.grade;
    }
  });
  console.log("highest grade", highestGrade);
  console.log("lowest grade", lowestGrade);
  console.log("summary ", summary);
});
