export function keysToArray(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("keysToArray: obj debe ser un objeto simple");
  }
  return Object.keys(obj);
}
