export function filterObject(obj, predicate) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("filterObject: obj debe ser un objeto simple");
  }
  if (typeof predicate !== "function") {
    throw new TypeError("filterObject: predicate debe ser una función");
  }
  
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (predicate(value, key)) {
      result[key] = value;
    }
  }
