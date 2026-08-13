export function isMultiple(value, divisor) {
  if (!Number.isInteger(value) || !Number.isInteger(divisor)) {
    throw new TypeError(
      "isMultiple: value y divisor deben ser enteros"
    );
  }
