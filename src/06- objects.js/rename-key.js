export function renameKey(obj, oldKey, newKey) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError(
      "renameKey: obj debe ser un objeto simple"
    );
  }
  if (typeof oldKey !== "string" || typeof newKey !== "string") {
    throw new TypeError(
      "renameKey: oldKey y newKey deben ser strings"
    );
  }
