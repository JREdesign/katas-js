export function clamp(value, min, max) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError("clamp: value debe ser un number válido");
  }
  if (typeof min !== "number" || Number.isNaN(min)) {
    throw new TypeError("clamp: min debe ser un number válido");
  }
  if (typeof max !== "number" || Number.isNaN(max)) {
    throw new TypeError("clamp: max debe ser un number válido");
  }
  if (min > max) {
    throw new RangeError("clamp: min no puede ser mayor que max");
  }

  if (value < min) return min;
  if (value > max) return max;
  return value;
}
