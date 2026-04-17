export function invertObject(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("invertObject: obj debe ser un objeto simple");
  }

  const out = {};
