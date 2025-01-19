export const calculateDistances = (coordinates, isPolygon = false) => {
  if (!coordinates || coordinates.length < 2) return [];

  const distances = [];

  for (let i = 1; i < coordinates.length; i++) {
    const [x1, y1] = coordinates[i - 1];
    const [x2, y2] = coordinates[i];

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    distances.push(Math.round(distance * 1000));
  }

  if (isPolygon && coordinates.length > 2) {
    const [x1, y1] = coordinates[coordinates.length - 1];
    const [x2, y2] = coordinates[0];
    const closingDistance = Math.sqrt(
      Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    );
    distances.push(Math.round(closingDistance * 1000));
  }

  return distances;
};
