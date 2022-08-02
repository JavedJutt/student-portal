import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { navigate } from "../../helpers/history";
import { IAddStudentRaw, IStudentRaw } from "../../state/ducks/student/types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { hoverStyling } from "../studentDashboard/styles";
import { specificColors } from "../../helpers/data";

function ActionMenu({
  item,
  index,
  deleteStudent,
}: {
  item: IStudentRaw;
  index: any;
  deleteStudent: (data: IAddStudentRaw) => void;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseEdit = (id: number) => {
    setAnchorEl(null);
    let route = "/student/" + id;
    navigate(route);
  };
  const handleCloseDelete = (item: IStudentRaw | any) => {
    setAnchorEl(null);

    deleteStudent(item);
  };
  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon
          key={index}
          sx={{
            color: specificColors.moreVertIconColor,
          }}
        />
      </Button>

      <Menu
        key={index}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        color={"black"}
        onClose={handleClose}
        sx={{ py: "0.3em" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => handleCloseEdit(item._id)}
          sx={{ ...hoverStyling }}
        >
          <EditIcon sx={{ color: "#A4B4CB" }} />
          &nbsp;&nbsp;Edit
        </MenuItem>
        <MenuItem
          onClick={() => handleCloseDelete(item)}
          sx={{ pb: 0, mb: 0, ...hoverStyling }}
        >
          <DeleteIcon sx={{ color: specificColors.deleteIconColor }} />{" "}
          &nbsp;&nbsp;Delete
        </MenuItem>
      </Menu>
    </>
  );
}

export default ActionMenu;
