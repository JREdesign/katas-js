export function insertAt(arr, index, value) {
  if (!Array.isArray(arr)) {
    throw new TypeError("insertAt: arr debe ser un array");
  }

  if (!Number.isInteger(index)) {
    throw new TypeError("insertAt: index debe ser un entero");
  }
