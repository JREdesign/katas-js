export function isEven(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError("isEven: n debe ser entero");
  }
  return n % 2 === 0;
}
