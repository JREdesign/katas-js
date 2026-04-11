export function sumBy(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError("sumBy: arr debe ser un array");
  }
