export function take(arr, count = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError("take: arr debe ser un array");
  }

  if (!Number.isInteger(count) || count < 0) {
    throw new TypeError("take: count debe ser un entero mayor o igual que 0");
  }
