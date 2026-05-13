export function objectSize(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("objectSize: obj debe ser un objeto simple");
  }
