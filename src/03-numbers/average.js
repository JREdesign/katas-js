export function average(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("average: arr debe ser un array");
  }
  if (arr.length === 0) {
    throw new RangeError("average: el array no puede estar vacío");
  }
