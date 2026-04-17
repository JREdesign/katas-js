export function invertObject(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError("invertObject: obj debe ser un objeto simple");
  }

  const out = {};
  for (const [key, value] of Object.entries(obj)) {
    out[String(value)] = key;
  }

  return out;
}
