import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import Draw from "ol/interaction/Draw";

const MapComponent = ({
  onCoordinatesUpdate,
  drawingMode,
  resetDrawingMode,
}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [vectorSource] = useState(new VectorSource());
  const drawInteractionRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const mapInstance = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSource,
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    setMap(mapInstance);

    return () => {
      mapInstance.setTarget(null);
    };
  }, []);

  useEffect(() => {
    if (map && drawingMode) {
      if (drawInteractionRef.current) {
        map.removeInteraction(drawInteractionRef.current);
        drawInteractionRef.current = null;
      }

      const draw = new Draw({
        source: vectorSource,
        type: drawingMode,
      });

      draw.on("drawend", (event) => {
        const coordinates = event.feature.getGeometry().getCoordinates();
        onCoordinatesUpdate(coordinates);
        map.removeInteraction(draw);
        drawInteractionRef.current = null;
        if (resetDrawingMode) {
          resetDrawingMode();
        }
      });

      map.addInteraction(draw);
      drawInteractionRef.current = draw;

      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          map.removeInteraction(draw);
          drawInteractionRef.current = null;
          if (resetDrawingMode) {
            resetDrawingMode();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        if (drawInteractionRef.current) {
          map.removeInteraction(drawInteractionRef.current);
          drawInteractionRef.current = null;
        }
      };
    }
  }, [map, drawingMode]);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default MapComponent;
