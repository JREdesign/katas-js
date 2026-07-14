export function isNegative(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError(
      "isNegative: value debe ser un number válido"
    );
  }
  return value < 0;
}
