export function take(arr, count = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError("take: arr debe ser un array");
  }

