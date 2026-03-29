export function pluck(arr, key) {
  if (!Array.isArray(arr)) {
    throw new TypeError("pluck: arr debe ser un array");
  }
  if (typeof key !== "string") {
    throw new TypeError("pluck: key debe ser un string");
  }
