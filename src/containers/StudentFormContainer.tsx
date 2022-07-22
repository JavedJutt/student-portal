import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddStudent from "../components/StudentForm";
import { IApplicationState } from "../state/ducks";
import { addStudent } from "../state/ducks/student/actions";
import { IAddStudentRaw, IStudentState } from "../state/ducks/student/types";

function StudentFormContainer() {
  const dispatch = useDispatch();
  const stateToProps: IStudentState = useSelector(
    ({ student }: IApplicationState) => ({
      data: student.data,
    })
  );
  const dispatchToProps = {
    addStudent: useCallback(
      (data: IAddStudentRaw) => dispatch(addStudent(data)),
      [dispatch]
    ),
  };

  return <AddStudent {...dispatchToProps} {...stateToProps} />;
}

export default StudentFormContainer;
