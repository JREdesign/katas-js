export function sumDigits(number) {
  if (!Number.isSafeInteger(number)) {
    throw new TypeError("sumDigits: se esperaba un entero seguro");
  }

  return String(Math.abs(number))
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

export function countDigits(number) {
  if (!Number.isSafeInteger(number)) {
    throw new TypeError("countDigits: se esperaba un entero seguro");
  }

  return String(Math.abs(number)).length;
}

export function digitSummary(number) {
  return {
    sum: sumDigits(number),
    count: countDigits(number),
    isEvenSum: sumDigits(number) % 2 === 0,
  };
}
