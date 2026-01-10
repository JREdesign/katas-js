export function compactArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("compactArray: arr debe ser un array");
  }
  return arr.filter(Boolean);
}
