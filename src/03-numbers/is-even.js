export function isEven(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError("isEven: n debe ser entero");
  }
