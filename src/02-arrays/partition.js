export function partition(arr, predicate) {
  if (!Array.isArray(arr)) {
    throw new TypeError("partition: arr debe ser un array");
  }
  if (typeof predicate !== "function") {
    throw new TypeError(
      "partition: predicate debe ser una función"
    );
  }

  const matches = [];
  const rest = [];
