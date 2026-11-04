export function removeDuplicates(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(Number.isFinite)) {
    throw new TypeError("removeDuplicates: se esperaba un array de números finitos");
  }

  return [...new Set(numbers)];
}

export function findDuplicates(numbers) {
  removeDuplicates(numbers);

  const seen = new Set();
  const duplicates = new Set();

  for (const number of numbers) {
    if (seen.has(number)) {
      duplicates.add(number);
    } else {
      seen.add(number);
    }
  }

  return [...duplicates];
}
