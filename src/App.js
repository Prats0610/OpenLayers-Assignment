import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import MissionModal from "./components/MissionModal";
import InitialModal from "./components/InitialModal";
import { calculateDistances } from "./utils/utils";
const App = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [distances, setDistances] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [drawingMode, setDrawingMode] = useState(null);
  const [initialModalOpen, setInitialModalOpen] = useState(false);

  const handleCoordinatesUpdate = (newCoordinates) => {
    setCoordinates(newCoordinates);
    setDistances(calculateDistances(newCoordinates));
    setModalOpen(true);
  };

  const handleStartDrawing = (mode) => {
    setDrawingMode(mode);
    setInitialModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setDrawingMode("LineString");
          setInitialModalOpen(true);
        }}
      >
        Draw LineString
      </button>
      <button
        onClick={() => {
          setDrawingMode("Polygon");
          setInitialModalOpen(true);
        }}
      >
        Draw Polygon
      </button>
      <MapComponent
        onCoordinatesUpdate={handleCoordinatesUpdate}
        drawingMode={drawingMode}
        resetDrawingMode={() => setDrawingMode(null)}
      />
      <MissionModal
        open={modalOpen}
        coordinates={coordinates}
        distances={distances}
        onClose={() => setModalOpen(false)}
      />
      <InitialModal
        open={initialModalOpen}
        onClose={() => handleStartDrawing(drawingMode)}
      />
    </>
  );
};

export default App;
