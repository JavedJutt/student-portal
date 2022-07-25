import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import { IAddStudentRaw, IStudentRaw } from "../state/ducks/student/types";
import { specificDate } from "../helpers";
import { colors } from "../helpers/data";
import { navigate } from "../helpers/history";
import ActionMenu from "./common/ActionMenu";

interface IProps {
  fetchStudents: () => void;
  list: IStudentRaw[];
  deleteStudent: (data: IAddStudentRaw) => void;
}

function StudentTable({ fetchStudents, list, deleteStudent }: IProps) {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div>
      <Grid container justifyContent="flex-end">
        <Button
          variant="outlined"
          sx={{ color: "#343744", mr: "100px", my: "20px" }}
          onClick={() => {
            navigate("/student");
          }}
        >
          + Add Data
        </Button>
      </Grid>

      {list.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
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
          </Table>
        </TableContainer>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default React.memo(StudentTable);
