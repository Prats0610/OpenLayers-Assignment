import React from "react";
import {
  Modal,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const MissionModal = ({ open, coordinates = [], distances = [], onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          margin: "auto",
          borderRadius: 4,
          maxWidth: 600,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Mission Waypoints
        </Typography>
        {coordinates.length === 0 ? (
          <Typography variant="body1">No waypoints added yet.</Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>WP</TableCell>
                <TableCell>Coordinates</TableCell>
                <TableCell>Distance (m)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coordinates.map((coord, index) => (
                <TableRow key={index}>
                  <TableCell>WP({index + 1})</TableCell>
                  <TableCell>
                    {Array.isArray(coord) ? coord.join(", ") : "Invalid Data"}
                  </TableCell>
                  <TableCell>{distances[index - 1] || "--"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => console.log("Generate Data:", coordinates)}
        >
          Generate Data
        </button>
      </Box>
    </Modal>
  );
};

export default MissionModal;
