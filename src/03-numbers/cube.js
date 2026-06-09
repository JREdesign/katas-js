export function cube(n) {
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new TypeError("cube: n debe ser un number válido");
  }
  return n * n * n;
}
