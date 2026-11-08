export function sumDigits(number) {
  if (!Number.isSafeInteger(number)) {
    throw new TypeError("sumDigits: se esperaba un entero seguro");
  }

  return String(Math.abs(number))
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
