export function countOccurrences(arr, target) {
  if (!Array.isArray(arr)) {
    throw new TypeError("countOccurrences: arr debe ser un array");
  }
  let count = 0;

  for (const item of arr) {
    if (Object.is(item, target)) {
      count += 1;
    }
  }
