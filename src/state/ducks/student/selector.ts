import { createSelector } from "reselect";
import { IApplicationState } from "..";
import { get, set } from "lodash";
import { gradesPresidance } from "../../../helpers/data";

const getList = (state: IApplicationState) => state.student.list;

export const getStudentSummary = createSelector(getList, (list) => {
  const summary = {
    highestGrade: "--",
    lowestGrade: "--",
    mostPassedSubject: "--",
    mostFailedSubject: "--",
  };
  const subjectSummary: Record<string, string> = {};
  list.forEach((item) => {
    if (!subjectSummary[item.subject]) {
      if (item.grade === "F") {
        set(subjectSummary, `${item.subject}`, {
          pass: 0,
          fail: 1,
        });
        summary.mostFailedSubject = item.subject;
      } else {
        set(subjectSummary, `${item.subject}`, {
          pass: 1,
          fail: 0,
        });
        summary.mostPassedSubject = item.subject;
      }
    } else {
      if (item.grade === "F") {
        set(
          subjectSummary,
          `${item.subject}.fail`,
          get(subjectSummary, `${item.subject}.fail`) + 1
        );
        if (
          get(subjectSummary, `${item.subject}.fail`) >
          get(subjectSummary, `${summary.mostFailedSubject}.fail`)
        )
          summary.mostFailedSubject = item.subject;
      } else {
        set(
          subjectSummary,
          `${item.subject}.pass`,
          get(subjectSummary, `${item.subject}.pass`) + 1
        );
        if (
          get(subjectSummary, `${item.subject}.pass`) >
          get(subjectSummary, `${summary.mostPassedSubject}.pass`)
        )
          summary.mostPassedSubject = item.subject;
      }
    }

    if (gradesPresidance.indexOf(item.grade) !== 0) {
      if (summary.lowestGrade === "--") summary.lowestGrade = item.grade;
      else if (
        gradesPresidance.indexOf(item.grade) <
        gradesPresidance.indexOf(summary.lowestGrade)
      )
        summary.lowestGrade = item.grade;
      if (summary.highestGrade === "--") summary.highestGrade = item.grade;
      else if (
        gradesPresidance.indexOf(item.grade) >
        gradesPresidance.indexOf(summary.highestGrade)
      )
        summary.highestGrade = item.grade;
    } else {
      summary.lowestGrade = item.grade;
    }
  });
  return summary;
});
