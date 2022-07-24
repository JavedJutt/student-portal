import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentForm from "../components/StudentForm";

import { IApplicationState } from "../state/ducks";
import {
  addStudent,
  fetchSpecificStudent,
} from "../state/ducks/student/actions";
import { IAddStudentRaw, IStudentState2 } from "../state/ducks/student/types";

function StudentFormContainer() {
  const dispatch = useDispatch();
  const stateToProps: IStudentState2 = useSelector(
    ({ student }: IApplicationState) => ({
      specificStudent: student.specificStudent,
      data: student.data,
    })
  );
  const dispatchToProps = {
    addStudent: useCallback(
      (data: IAddStudentRaw) => dispatch(addStudent(data)),
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
