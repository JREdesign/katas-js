export function objectValuesSum(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("objectValuesSum: obj debe ser un objeto simple");
  }
