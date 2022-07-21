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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import {
  IDispatchToProps,
  IStudentRaw,
  IStudentState,
} from "../state/ducks/student/types";
import { specificDate } from "../helpers";
import { colors } from "../helpers/data";
import { navigate } from "../helpers/history";

type AllProps = IDispatchToProps & IStudentState;

function StudentTable({ fetchStudents, data }: AllProps) {
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
            navigate("/students");
          }}
        >
          + Add Data
        </Button>
      </Grid>

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
