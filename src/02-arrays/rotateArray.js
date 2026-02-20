export function rotateArray(arr, k) {
  if (!Array.isArray(arr)) {
    throw new TypeError("rotateArray: arr debe ser un array");
  }
  if (!Number.isInteger(k)) {
    throw new TypeError("rotateArray: k debe ser un entero");
  }
const n = arr.length;
  if (n === 0) return [];

  const shift = ((k % n) + n) % n;
  return arr.slice(-shift).concat(arr.slice(0, -shift));
}
