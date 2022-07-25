import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentForm from "../components/StudentForm";

import { IApplicationState } from "../state/ducks";
import {
  addStudent,
  editStudent,
  fetchSpecificStudent,
} from "../state/ducks/student/actions";
import {
  IAddStudentRaw,
  IStudentStateModified,
} from "../state/ducks/student/types";

function StudentFormContainer() {
  const dispatch = useDispatch();
  const stateToProps: IStudentStateModified = useSelector(
    ({ student }: IApplicationState) => ({
      specificStudent: student.specificStudent,
      list: student.list,
    })
  );
  const dispatchToProps = {
    addStudent: useCallback(
      (data: IAddStudentRaw) => dispatch(addStudent(data)),
      [dispatch]
    ),
    editStudent: useCallback(
      (data: IAddStudentRaw) => dispatch(editStudent(data)),
      [dispatch]
    ),
    fetchSpecificStudent: useCallback(
      (id: string | undefined) => dispatch(fetchSpecificStudent(id)),
      [dispatch]
    ),
  };

  return <StudentForm {...dispatchToProps} {...stateToProps} />;
}

export default StudentFormContainer;
