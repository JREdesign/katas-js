export function mapValues(obj, fn) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("mapValues: obj debe ser un objeto simple");
  }
  if (typeof fn !== "function") {
    throw new TypeError("mapValues: fn debe ser función");
  }
 const out = {};

  for (const [key, value] of Object.entries(obj)) {
    out[key] = fn(value, key);
  }

  return out;
}
