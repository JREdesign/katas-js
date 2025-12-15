export function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError("factorial: n debe ser un entero >= 0");
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
