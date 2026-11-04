export function removeDuplicates(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(Number.isFinite)) {
    throw new TypeError("removeDuplicates: se esperaba un array de números finitos");
  }

  return [...new Set(numbers)];
}
