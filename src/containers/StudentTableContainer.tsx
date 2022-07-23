import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentTable from "../components/StudentTable";
import { IApplicationState } from "../state/ducks";
import { deleteStudent, fetchStudents } from "../state/ducks/student/actions";
import { IAddStudentRaw, IStudentState } from "../state/ducks/student/types";

const StudentTableContainer = () => {
  const dispatch = useDispatch();
  const stateToProps: IStudentState = useSelector(
    ({ student }: IApplicationState) => ({
      data: student.data,
    })
  );

  const dispatchToProps = {
    fetchStudents: useCallback(() => dispatch(fetchStudents()), [dispatch]),
    deleteStudent: useCallback(
      (data: IAddStudentRaw) => dispatch(deleteStudent(data)),
      [dispatch]
    ),
  };

  return <StudentTable {...stateToProps} {...dispatchToProps} />;
};

export default StudentTableContainer;
