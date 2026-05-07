export function firstItem(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("firstItem: arr debe ser un array");
  }
  return arr.length === 0 ? undefined : arr[0];
}
