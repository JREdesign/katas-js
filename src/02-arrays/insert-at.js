export function insertAt(arr, index, value) {
  if (!Array.isArray(arr)) {
    throw new TypeError("insertAt: arr debe ser un array");
  }
