export function lastItem(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("lastItem: arr debe ser un array");
  }
