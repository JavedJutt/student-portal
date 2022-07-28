import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/studentDashboard/Table";
import { IApplicationState } from "../state/ducks";
import { deleteStudent, fetchStudents } from "../state/ducks/student/actions";
import { IAddStudentRaw, IStudentState } from "../state/ducks/student/types";

const TableContainer = () => {
  const dispatch = useDispatch();
  const stateToProps: IStudentState = useSelector(
    ({ student }: IApplicationState) => ({
      list: student.list,
    })
  );

  const dispatchToProps = {
    fetchStudents: useCallback(() => dispatch(fetchStudents()), [dispatch]),
    deleteStudent: useCallback(
      (data: IAddStudentRaw) => dispatch(deleteStudent(data)),
      [dispatch]
    ),
  };

  return <Table {...stateToProps} {...dispatchToProps} />;
};

export default TableContainer;
