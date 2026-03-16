export function average(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("average: arr debe ser un array");
  }
  if (arr.length === 0) {
    throw new RangeError("average: el array no puede estar vacío");
  }
let sum = 0;
  for (const n of arr) {
    if (typeof n !== "number" || Number.isNaN(n)) {
      throw new TypeError("average: todos los elementos deben ser numbers válidos");
    }
    sum += n;
  }
  return sum / arr.length;
}
