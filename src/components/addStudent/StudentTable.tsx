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
import React from "react";
import moment from "moment";

function StudentTable() {
  function studentRecord(
    name: string,
    marks: number,
    subject: string,
    grade: string,
    date: string
  ) {
    return { name, marks, subject, grade, date };
  }
  const cur = moment().format("MMM D, YYYY [at] hh.mm A");
  const rows = [
    studentRecord("Ali", 80, "English", "A-", cur),
    studentRecord("Ahmad", 70, "Arabic", "B+", cur),
    studentRecord("Ahmad", 80, "computer", "A-", cur),
  ];

  return (
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
          {rows.map((rows) => (
            <TableRow>
              <TableCell>{rows.name} </TableCell>
              <TableCell>{rows.marks} </TableCell>
              <TableCell>{rows.subject} </TableCell>
              <TableCell>{rows.grade} </TableCell>
              <TableCell>{rows.date} </TableCell>
              <TableCell>
                <MoreVertIcon></MoreVertIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentTable;
