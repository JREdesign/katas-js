export function inRange(value, min, max) {
  if (
    typeof value !== "number" || Number.isNaN(value) ||
    typeof min !== "number" || Number.isNaN(min) ||
    typeof max !== "number" || Number.isNaN(max)
  ) {
    throw new TypeError("inRange: value, min y max deben ser numbers válidos");
  }
  if (min > max) {
    throw new RangeError("inRange: min no puede ser mayor que max");
  }

  return value >= min && value <= max;
}
