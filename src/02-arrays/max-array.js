export function maxArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("maxArray: arr debe ser un array");
  }
  if (arr.length === 0) {
    throw new RangeError("maxArray: el array no puede estar vacío");
  }
 let max = -Infinity;
  for (const n of arr) {
    if (typeof n !== "number" || Number.isNaN(n)) {
      throw new TypeError("maxArray: todos los elementos deben ser numbers válidos");
    }
    if (n > max) max = n;
  }
  return max;
}
