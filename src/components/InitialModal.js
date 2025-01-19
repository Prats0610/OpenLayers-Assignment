import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const InitialModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          margin: "auto",
          borderRadius: 4,
          maxWidth: 400,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Mission Creation
        </Typography>
        <Typography variant="body1" gutterBottom>
          Click on the map to mark points of the route and then press Enter to
          complete the route.
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Start Drawing
        </Button>
      </Box>
    </Modal>
  );
};

export default InitialModal;
