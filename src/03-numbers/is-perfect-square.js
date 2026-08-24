export function isPerfectSquare(n) {
  if (n < 0) return false;

  const root = Math.sqrt(n);
  return Number.isInteger(root);
}
