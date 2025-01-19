import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";

const CoordinateDropdown = ({ onInsertBefore, onInsertAfter }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            onInsertBefore();
            handleClose();
          }}
        >
          Insert Polygon Before
        </MenuItem>
        <MenuItem
          onClick={() => {
            onInsertAfter();
            handleClose();
          }}
        >
          Insert Polygon After
        </MenuItem>
      </Menu>
    </>
  );
};

export default CoordinateDropdown;
