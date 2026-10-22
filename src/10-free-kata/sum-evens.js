export function sumEvens(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
    throw new TypeError("sumEvens: se esperaba un array de enteros");
  }

  return numbers
    .filter((number) => number % 2 === 0)
    .reduce((total, number) => total + number, 0);
}

export function countEvens(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
    throw new TypeError("countEvens: se esperaba un array de enteros");
  }

  return numbers.filter((number) => number % 2 === 0).length;
}

export function averageEvens(numbers) {
  const count = countEvens(numbers);
  return count === 0 ? null : sumEvens(numbers) / count;
}
