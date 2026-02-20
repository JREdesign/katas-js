export function rotateArray(arr, k) {
  if (!Array.isArray(arr)) {
    throw new TypeError("rotateArray: arr debe ser un array");
  }
  if (!Number.isInteger(k)) {
    throw new TypeError("rotateArray: k debe ser un entero");
  }
