import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { navigate } from "../helpers/history";
import { IStudentRaw } from "../state/ducks/student/types";

function MenuComp({ obj, index }: { obj: IStudentRaw; index: any }) {
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
  const handleCloseDelete = (id: number | any) => {
    setAnchorEl(null);
    console.log("data on click", id);
    navigate("/");
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
        <MoreVertIcon key={index} />
      </Button>

      <Menu
        key={index}
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
        <MenuItem onClick={() => handleCloseEdit(obj._id)}>Edit</MenuItem>
        <MenuItem onClick={() => handleCloseDelete(obj._id)}>Delete</MenuItem>
      </Menu>
    </>
  );
}

export default MenuComp;
