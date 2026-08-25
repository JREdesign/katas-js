export function uniqueValues(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("uniqueValues: arr debe ser un array");
  }

  const result = [];

  for (const item of arr) {
    if (!result.some((value) => Object.is(value, item))) {
      result.push(item);
    }
  }

  return result;
}
