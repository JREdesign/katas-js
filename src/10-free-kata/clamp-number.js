export function clampNumber(value, min, max) {
  if (![value, min, max].every(Number.isFinite)) {
    throw new TypeError("clampNumber: se esperaban números finitos");
  }

  if (min > max) {
    throw new RangeError("clampNumber: min no puede ser mayor que max");
  }

  return Math.min(Math.max(value, min), max);
}

export function isWithinRange(value, min, max) {
  return clampNumber(value, min, max) === value;
}

export function clampNumbers(numbers, min, max) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("clampNumbers: numbers debe ser un array");
  }

  return numbers.map((number) => clampNumber(number, min, max));
}
