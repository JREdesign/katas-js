export function clampNumber(value, min, max) {
  if (![value, min, max].every(Number.isFinite)) {
    throw new TypeError("clampNumber: se esperaban números finitos");
  }

  if (min > max) {
    throw new RangeError("clampNumber: min no puede ser mayor que max");
  }

  return Math.min(Math.max(value, min), max);
}
