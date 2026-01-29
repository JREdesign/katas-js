export function flattenOneLevel(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("flattenOneLevel: arr debe ser un array");
  }
  return arr.flat(1);
}
