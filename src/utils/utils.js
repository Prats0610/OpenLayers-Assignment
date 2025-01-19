import { getDistance } from "ol/sphere";

export const calculateDistances = (coordinates) => {
  if (!coordinates || coordinates.length < 2) return [];
  const distances = [];
  for (let i = 1; i < coordinates.length; i++) {
    const distance = getDistance(coordinates[i - 1], coordinates[i]);
    distances.push(distance);
  }
  return distances;
};
