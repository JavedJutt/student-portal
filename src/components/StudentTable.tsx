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
import {
  IDispatchToProps,
  IStudentRaw,
  IStudentState,
} from "../state/ducks/student/types";
import { specificDate } from "../helpers";
import { colors } from "../helpers/data";
import { navigate } from "../helpers/history";
import MenuComp from "./MenuComp";

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
            navigate("/student");
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
              {data.map((obj: IStudentRaw, index) => (
                <TableRow key={index}>
                  <TableCell>{obj.name} </TableCell>
                  <TableCell>{obj.marks} </TableCell>
                  <TableCell>{obj.subject} </TableCell>
                  <TableCell sx={{ bgcolor: colors[obj.grade] }}>
                    {obj.grade}
                  </TableCell>
                  <TableCell>{specificDate(obj.time)} </TableCell>
                  <TableCell>
                    <MenuComp obj={obj} index={index} />
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
