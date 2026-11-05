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

export function duplicatesSummary(numbers) {
  const unique = removeDuplicates(numbers);
  const duplicates = findDuplicates(numbers);

  return {
    unique,
    duplicates,
    total: numbers.length,
    uniqueCount: unique.length,
    duplicateCount: numbers.length - unique.length,
  };
}

export function countOccurrences(numbers) {
  removeDuplicates(numbers);

  const counts = new Map();
  for (const number of numbers) {
    counts.set(number, (counts.get(number) ?? 0) + 1);
  }

  return [...counts].map(([value, count]) => ({ value, count }));
}
