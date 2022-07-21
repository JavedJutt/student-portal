import {
  Button,
  Grid,
  Menu,
  MenuItem,
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseEdit = (data: IStudentRaw | any) => {
    setAnchorEl(null);
    navigate("/students");
  };
  const handleCloseDelete = (id: number | any) => {
    setAnchorEl(null);
    console.log("data on click", id);
    navigate("/");
  };

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
                    <Button
                      id="demo-positioned-button"
                      aria-controls={open ? "demo-positioned-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </Button>

                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem onClick={(data) => handleCloseEdit(data)}>
                        {" "}
                        Edit
                      </MenuItem>
                      <MenuItem onClick={(data) => handleCloseDelete(data)}>
                        {" "}
                        Delete
                      </MenuItem>
                    </Menu>
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
