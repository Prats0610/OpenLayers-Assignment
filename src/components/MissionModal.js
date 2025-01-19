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
  Button,
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
          <Typography>No waypoints added yet.</Typography>
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
                  <TableCell>
                    WP({String(index + 1).padStart(2, "0")})
                  </TableCell>
                  <TableCell>{coord.join(", ")}</TableCell>
                  <TableCell>
                    {index === 0 ? "--" : distances[index - 1] || "--"}
                  </TableCell>
                </TableRow>
              ))}
              {distances.length > coordinates.length && (
                <TableRow>
                  <TableCell>WP(Close)</TableCell>
                  <TableCell>{coordinates[0].join(", ")}</TableCell>
                  <TableCell>{distances[distances.length - 1]}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Final Data:", { coordinates, distances })}
        >
          Generate Data
        </Button>
      </Box>
    </Modal>
  );
};

export default MissionModal;
