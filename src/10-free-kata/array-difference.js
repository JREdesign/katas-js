function validateArrays(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second)) {
    throw new TypeError("arrayDifference: se esperaban dos arrays");
  }
}

export function arrayDifference(first, second) {
  validateArrays(first, second);
  const excluded = new Set(second);
  return [...new Set(first)].filter((value) => !excluded.has(value));
}
