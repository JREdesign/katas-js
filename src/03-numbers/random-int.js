export function randomInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError("randomInt: min y max deben ser enteros");
  }
  if (min > max) {
    throw new RangeError("randomInt: min no puede ser mayor que max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
