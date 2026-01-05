export function uniqueArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("uniqueArray: arr debe ser un array");
  }
  return [...new Set(arr)];
}
