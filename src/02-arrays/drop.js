export function drop(arr, count = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError("drop: arr debe ser un array");
  }
  if (!Number.isInteger(count) || count < 0) {
    throw new TypeError("drop: count debe ser un entero >= 0");
  }
