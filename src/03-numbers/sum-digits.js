export function sumDigits(value) {
  if (!Number.isInteger(value)) {
    throw new TypeError("sumDigits: value debe ser un entero");
  }
  return Math.abs(value)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
