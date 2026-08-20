// KATAS-JS/src/03-numbers/digit-sum.js
/**
 * Suma los dígitos de un número entero, ignorando su signo.
 *
 * @param {number} number entero del que se quieren sumar los dígitos
 * @returns {number} suma de sus dígitos
 * @throws {TypeError} si number no es un entero
 */
export function digitSum(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("digitSum: number debe ser un entero");
  }

  return String(Math.abs(number))
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
