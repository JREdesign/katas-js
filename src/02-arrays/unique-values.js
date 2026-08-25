export function uniqueValues(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("uniqueValues: arr debe ser un array");
  }

  return arr.filter(
    (item, index) => arr.findIndex((value) => Object.is(value, item)) === index,
  );
}
