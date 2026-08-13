export function isMultiple(value, divisor) {
  if (!Number.isInteger(value) || !Number.isInteger(divisor)) {
    throw new TypeError(
      "isMultiple: value y divisor deben ser enteros"
    );
  }
  if (divisor === 0) {
    throw new RangeError(
      "isMultiple: divisor no puede ser 0"
    );
  }
