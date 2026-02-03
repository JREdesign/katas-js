export function randomInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError("randomInt: min y max deben ser enteros");
  }
  if (min > max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
