type Coordinate = {
  x: number;
  y: number;
};

/**
 * Returns the distance between 2 coordinates
 */
export default function distance(coord1: Coordinate, coord2: Coordinate) {
  const a = Math.abs(coord1.x - coord2.x);
  const aPow = Math.pow(a, 2);
  const b = Math.abs(coord1.y - coord2.y);
  const bPow = Math.pow(b, 2);

  const cPow = aPow + bPow;
  const c = Math.sqrt(cPow);

  return c;
}
