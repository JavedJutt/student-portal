import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentTable from "../components/addStudent/StudentTable";
import { fetchStudents } from "../state/ducks/student/actions";

const StudentTableContainer = () => {
  const dispatch = useDispatch();
  const stateToProps: any = useSelector(({ student }: any) => ({
    data: student.data,
  }));

  const dispatchToProps = {
    fetchStudents: useCallback(() => dispatch(fetchStudents()), [dispatch]),
  };

  return <StudentTable {...stateToProps} {...dispatchToProps} />;
};

export default StudentTableContainer;
