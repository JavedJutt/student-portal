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

function StudentTable({ fetchStudents, data }: any) {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const student = {
    date: new Date(),
  };

  console.log(JSON.stringify(student));

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
              {data.map((data: any) => (
                <TableRow key={data._id}>
                  <TableCell>{data.name} </TableCell>
                  <TableCell>{data.marks} </TableCell>
                  <TableCell>{data.subject} </TableCell>
                  <TableCell>{data.grade} </TableCell>
                  <TableCell>{data.time} </TableCell>
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
