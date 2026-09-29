export function compactObject(obj, predicate = Boolean) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("compactObject: obj debe ser un objeto simple");
  }

  if (typeof predicate !== "function") {
    throw new TypeError("compactObject: predicate debe ser una función");
  }

  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (predicate(value, key, obj)) {
      result[key] = value;
    }
  }

  return result;
}
