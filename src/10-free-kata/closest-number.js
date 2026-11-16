function validateNumbers(numbers, target) {
  if (!Array.isArray(numbers) || numbers.length === 0 ||
      !numbers.every(Number.isFinite) || !Number.isFinite(target)) {
    throw new TypeError("closestNumber: se esperaba un array no vacío de números finitos y un objetivo finito");
  }
}

export function closestNumber(numbers, target) {
  validateNumbers(numbers, target);
  return numbers.reduce((closest, value) =>
    Math.abs(value - target) < Math.abs(closest - target) ? value : closest
  );
}

export function closestNumberIndex(numbers, target) {
  validateNumbers(numbers, target);
  const closest = closestNumber(numbers, target);
  return numbers.indexOf(closest);
}

export function closestNumberDistance(numbers, target) {
  return Math.abs(closestNumber(numbers, target) - target);
}

export function closestNumberSummary(numbers, target) {
  const index = closestNumberIndex(numbers, target);
  return {
    value: numbers[index],
    index,
    distance: Math.abs(numbers[index] - target),
  };
}

export function hasExactMatch(numbers, target) {
  validateNumbers(numbers, target);
  return numbers.includes(target);
}
