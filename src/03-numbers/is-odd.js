export function isOdd(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError("isOdd: n debe ser entero");
  }
