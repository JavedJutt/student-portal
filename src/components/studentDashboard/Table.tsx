import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { datePart1, datePart2 } from "../../helpers";
import { BgColors, colors } from "../../helpers/data";
import { IAddStudentRaw, IStudentRaw } from "../../state/ducks/student/types";
import ActionMenu from "../common/ActionMenu";
import DateCell from "./DateCell";
import GradeCell from "./GradeCell";
import { tableText, textModified } from "./styles";

interface IProps {
  fetchStudents: () => void;
  list: IStudentRaw[];
  deleteStudent: (data: IAddStudentRaw) => void;
}

function Table({ fetchStudents, list, deleteStudent }: IProps) {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);
  console.log(list);
  return (
    <div>
      {list.length > 0 ? (
        <TableContainer>
          <MuiTable>
            <TableHead>
              <TableRow>
                <TableCell sx={tableText}> Name</TableCell>
                <TableCell sx={tableText}> Marks</TableCell>
                <TableCell sx={tableText}> Subject</TableCell>
                <TableCell sx={{ ...tableText, pl: 5 }}> Grade</TableCell>
                <TableCell sx={tableText}> Date</TableCell>
                <TableCell> Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((student: IStudentRaw, index: number) => (
                <TableRow key={student._id}>
                  <TableCell>{student.name} </TableCell>
                  <TableCell>{student.marks} </TableCell>
                  <TableCell>{student.subject} </TableCell>
                  <TableCell>
                    <GradeCell grade={student.grade} />
                  </TableCell>
                  <TableCell>
                    <DateCell time={student.time} />
                  </TableCell>
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
