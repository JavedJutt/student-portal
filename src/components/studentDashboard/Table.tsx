import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { specificDate } from "../../helpers";
import { colors } from "../../helpers/data";
import { IAddStudentRaw, IStudentRaw } from "../../state/ducks/student/types";
import ActionMenu from "../common/ActionMenu";

interface IProps {
  fetchStudents: () => void;
  list: IStudentRaw[];
  deleteStudent: (data: IAddStudentRaw) => void;
}

function Table({ fetchStudents, list, deleteStudent }: IProps) {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div>
      {list.length > 0 ? (
        <TableContainer component={Paper}>
          <MuiTable>
            <TableHead>
              <TableRow>
                <TableCell> Name</TableCell>
                <TableCell> Marks</TableCell>
                <TableCell> Subject</TableCell>
                <TableCell> Grade</TableCell>
                <TableCell> Date</TableCell>
                <TableCell> Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((student: IStudentRaw, index: number) => (
                <TableRow key={student._id}>
                  <TableCell>{student.name} </TableCell>
                  <TableCell>{student.marks} </TableCell>
                  <TableCell>{student.subject} </TableCell>
                  <TableCell sx={{ bgcolor: colors[student.grade] }}>
                    {student.grade}
                  </TableCell>
                  <TableCell>{specificDate(student.time)} </TableCell>
                  <TableCell>
                    <ActionMenu
                      item={student}
                      index={index}
                      deleteStudent={deleteStudent}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default Table;
