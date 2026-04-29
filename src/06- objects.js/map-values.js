export function mapValues(obj, fn) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("mapValues: obj debe ser un objeto simple");
  }
