export function compactObject(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError(
      "compactObject: obj debe ser un objeto simple"
    );
  }
  
 const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      result[key] = value;
    }
  }
