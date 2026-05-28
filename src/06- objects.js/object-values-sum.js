export function objectValuesSum(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("objectValuesSum: obj debe ser un objeto simple");
  }
  let sum = 0;

  for (const value of Object.values(obj)) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError("objectValuesSum: todos los valores deben ser numbers válidos");
    }
    sum += value;
  }
