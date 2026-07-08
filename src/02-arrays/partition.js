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

  for (const item of arr) {
    if (predicate(item)) {
      matches.push(item);
    } else {
      rest.push(item);
    }
  }
