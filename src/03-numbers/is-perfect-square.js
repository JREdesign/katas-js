export function isPerfectSquare(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError("isPerfectSquare: n debe ser un entero");
  }

  if (n < 0) return false;

  const root = Math.sqrt(n);
  return Number.isInteger(root);
}
