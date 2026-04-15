export function inRange(value, min, max) {
  if (
    typeof value !== "number" || Number.isNaN(value) ||
    typeof min !== "number" || Number.isNaN(min) ||
    typeof max !== "number" || Number.isNaN(max)
  ) {
    throw new TypeError("inRange: value, min y max deben ser numbers válidos");
  }
