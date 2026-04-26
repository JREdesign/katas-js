export function lastItem(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("lastItem: arr debe ser un array");
  }
  return arr.length === 0 ? undefined : arr[arr.length - 1];
}
