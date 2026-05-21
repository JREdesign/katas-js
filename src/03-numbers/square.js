export function square(n) {
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new TypeError("square: n debe ser un number válido");
  }
 return n * n;
}
