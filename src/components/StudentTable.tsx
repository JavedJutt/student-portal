import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import {
  IDispatchToProps,
  IStudentRaw,
  IStudentState,
} from "../state/ducks/student/types";
import moment from "moment";
type AllProps = IDispatchToProps & IStudentState;
function StudentTable({ fetchStudents, data }: AllProps) {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const specificDate = (time: string) =>
    moment(time).format("MMM D, YYYY [at] hh.mm A");

  const colors: Record<string, string> = {
    "A+": "#686563",
    "A-": "#686563",
    "B+": "#FFF7F5",
    "B-": "#FFF7F5",
    F: "#FF6897",
  };

  return (
    <div>
      {data.length > 0 ? (
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
              {data.map((data: IStudentRaw) => (
                <TableRow key={data._id}>
                  <TableCell>{data.name} </TableCell>
                  <TableCell>{data.marks} </TableCell>
                  <TableCell>{data.subject} </TableCell>
                  <TableCell sx={{ bgcolor: colors[data.grade] }}>
                    {data.grade}
                  </TableCell>
                  <TableCell>{specificDate(data.time)} </TableCell>
                  <TableCell>
                    <MoreVertIcon></MoreVertIcon>
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