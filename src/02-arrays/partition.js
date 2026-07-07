export function partition(arr, predicate) {
  if (!Array.isArray(arr)) {
    throw new TypeError("partition: arr debe ser un array");
  }
