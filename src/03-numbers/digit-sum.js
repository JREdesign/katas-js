// KATAS-JS/src/03-numbers/digit-sum.js
export function digitSum(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("digitSum: number debe ser un entero");
  }

  return String(Math.abs(number))
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
