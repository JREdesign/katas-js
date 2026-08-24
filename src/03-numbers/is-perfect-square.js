export function isPerfectSquare(n) {
  if (!Number.isSafeInteger(n)) {
    throw new TypeError("isPerfectSquare: n debe ser un entero seguro");
  }

  if (n < 0) return false;

  const root = Math.sqrt(n);
  return Number.isInteger(root);
}
