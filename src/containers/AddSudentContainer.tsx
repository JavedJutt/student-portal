import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import AddStudent from "../components/AddStudent";
import { addStudent } from "../state/ducks/student/actions";
import { IAddStudentRaw } from "../state/ducks/student/types";

function AddSudentContainer() {
  const dispatch = useDispatch();
  const dispatchToProps = {
    addStudent: useCallback(
      (data: IAddStudentRaw) => dispatch(addStudent(data)),
      [dispatch]
    ),
  };

  return <AddStudent {...dispatchToProps} />;
}

export default AddSudentContainer;
