export function countOccurrences(arr, target) {
  if (!Array.isArray(arr)) {
    throw new TypeError("countOccurrences: arr debe ser un array");
  }

  return arr.reduce(
    (count, item) => count + Number(Object.is(item, target)),
    0
  );
}
