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
  const colors = [
    { grade: "A+", color: "#686563" },
    { grade: "B+", color: "#FFF7F5" },
    { grade: "F", color: "#FF6897" },
  ];

  const getColor = (grade: any) => {
    let x = colors.filter((color) => {
      return color.grade === grade;
    });
    return x[0].color;
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
                  <TableCell sx={{ bgcolor: getColor(data.grade) }}>
                    {data.grade}
                  </TableCell>
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
