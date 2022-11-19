/**
 * Interpolates within the range [`start`..`end`] based on a `t` parameter
 * @param t typically a range within a [0..1]
 */
export default function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}
