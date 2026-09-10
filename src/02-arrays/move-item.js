export function moveItem(arr, fromIndex, toIndex) {
  if (!Array.isArray(arr)) {
    throw new TypeError("moveItem: arr debe ser un array");
  }
