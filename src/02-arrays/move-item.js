export function moveItem(arr, fromIndex, toIndex) {
  if (!Array.isArray(arr)) {
    throw new TypeError("moveItem: arr debe ser un array");
  }
  if (!Number.isInteger(fromIndex) || !Number.isInteger(toIndex)) {
    throw new TypeError(
      "moveItem: fromIndex y toIndex deben ser enteros"
    );
  }
  if (
    fromIndex < 0 ||
    fromIndex >= arr.length ||
    toIndex < 0 ||
    toIndex >= arr.length
  ) {
