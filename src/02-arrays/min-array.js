export function minArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("minArray: arr debe ser un array");
  }
  if (arr.length === 0) {
    throw new RangeError("minArray: el array no puede estar vacío");
  }
