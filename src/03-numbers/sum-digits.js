export function sumDigits(value) {
  if (!Number.isInteger(value)) {
    throw new TypeError("sumDigits: value debe ser un entero");
  }
