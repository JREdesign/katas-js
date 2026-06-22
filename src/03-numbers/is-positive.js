export function isPositive(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError("isPositive: value debe ser un number válido");
  }

  return value > 0;
}
