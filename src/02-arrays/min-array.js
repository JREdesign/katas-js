export function minArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("minArray: arr debe ser un array");
  }
  if (arr.length === 0) {
    throw new RangeError("minArray: el array no puede estar vacío");
  }
let min = Infinity;
  for (const n of arr) {
    if (typeof n !== "number" || Number.isNaN(n)) {
      throw new TypeError("minArray: todos los elementos deben ser numbers válidos");
    }
    if (n < min) min = n;
  }
  return min;
}
