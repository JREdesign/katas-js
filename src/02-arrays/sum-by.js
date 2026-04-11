export function sumBy(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError("sumBy: arr debe ser un array");
  }
  if (typeof fn !== "function") {
    throw new TypeError("sumBy: fn debe ser función");
  }
