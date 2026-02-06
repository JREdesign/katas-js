export function pick(obj, keys) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("pick: obj debe ser un objeto");
  }
  if (!Array.isArray(keys)) {
    throw new TypeError("pick: keys debe ser un array");
  }
const out = {};
  for (const k of keys) {
    if (typeof k !== "string") {
      throw new TypeError("pick: cada key debe ser un string");
    }
    if (k in obj) out[k] = obj[k];
  }
  return out;
}
const out = {};
  for (const k of keys) {
    if (typeof k !== "string") {
      throw new TypeError("pick: cada key debe ser un string");
    }
    if (k in obj) out[k] = obj[k];
  }
  return out;
}
