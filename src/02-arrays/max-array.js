export function maxArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("maxArray: arr debe ser un array");
  }
  if (arr.length === 0) {
    throw new RangeError("maxArray: el array no puede estar vacío");
  }
