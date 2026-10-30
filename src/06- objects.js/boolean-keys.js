export function booleanKeys(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError(
      "booleanKeys: obj debe ser un objeto simple"
    );
  }
