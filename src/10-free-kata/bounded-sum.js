export function boundedSum(numbers, limit) {
  if (!Array.isArray(numbers) || !numbers.every(Number.isFinite)) {
    throw new TypeError("boundedSum: numbers debe ser un array de números");
  }

  if (!Number.isFinite(limit)) {
    throw new TypeError("boundedSum: limit debe ser un número");
  }

  let total = 0;

  for (const number of numbers) {
    if (total + number > limit) break;
    total += number;
  }

  return total;
}

export function boundedSumDetails(numbers, limit) {
  const total = boundedSum(numbers, limit);
  const used = [];

  let runningTotal = 0;

  for (const number of numbers) {
    if (runningTotal + number > limit) break;
    runningTotal += number;
    used.push(number);
  }

  return { total, used, count: used.length };
}
