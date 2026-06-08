export function drop(arr, count = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError("drop: arr debe ser un array");
  }
