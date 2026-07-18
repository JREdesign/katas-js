export function renameKey(obj, oldKey, newKey) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError(
      "renameKey: obj debe ser un objeto simple"
    );
  }
