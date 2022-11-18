/**
 * Returns a number with the value limited to the given range.
 *
 * Examples:
 ** `clamp(100, 10, 50)` => 50
 ** `clamp(0, 10, 50)` => 10
 */
export default function clamp(x: number, min: number, max: number) {
  return Math.min(Math.max(x, min), max);
}
