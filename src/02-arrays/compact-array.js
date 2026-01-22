export function compactArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("compactArray: el argumento debe ser un array");
  }
  return arr.filter(Boolean);
}
