import { createSelector } from "reselect";
import { IApplicationState } from "..";
import { get, set } from "lodash";
import { gradesPresidance } from "../../../helpers/data";

const getList = (state: IApplicationState) => state.student.list;

export const getStudentSummary = createSelector(getList, (list) => {
  let Summary = {
    highestGrade: "--",
    lowestGrade: "--",
    mostPassedSubject: "--",
    mostFailedSubject: "--",
  };
  let subjectSummary: Record<string, string> = {};
  list.forEach((item) => {
    if (!subjectSummary[item.subject]) {
      if (item.grade === "F") {
        set(subjectSummary, `${item.subject}`, {
          pass: 0,
          fail: 1,
        });
        Summary.mostFailedSubject = item.subject;
      } else {
        set(subjectSummary, `${item.subject}`, {
          pass: 1,
          fail: 0,
        });
        Summary.mostPassedSubject = item.subject;
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
          get(subjectSummary, `${Summary.mostFailedSubject}.fail`)
        )
          Summary.mostFailedSubject = item.subject;
      } else {
        set(
          subjectSummary,
          `${item.subject}.pass`,
          get(subjectSummary, `${item.subject}.pass`) + 1
        );
        if (
          get(subjectSummary, `${item.subject}.pass`) >
          get(subjectSummary, `${Summary.mostPassedSubject}.pass`)
        )
          Summary.mostPassedSubject = item.subject;
      }
    }

    if (gradesPresidance.indexOf(item.grade) !== 0) {
      if (Summary.lowestGrade === "--") Summary.lowestGrade = item.grade;
      else if (
        gradesPresidance.indexOf(item.grade) <
        gradesPresidance.indexOf(Summary.lowestGrade)
      )
        Summary.lowestGrade = item.grade;
      if (Summary.highestGrade === "--") Summary.highestGrade = item.grade;
      else if (
        gradesPresidance.indexOf(item.grade) >
        gradesPresidance.indexOf(Summary.highestGrade)
      )
        Summary.highestGrade = item.grade;
    } else {
      Summary.lowestGrade = item.grade;
    }
  });
  return Summary;
});
