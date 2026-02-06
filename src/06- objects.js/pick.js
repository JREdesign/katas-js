export function pick(obj, keys) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("pick: obj debe ser un objeto");
  }
  if (!Array.isArray(keys)) {
    throw new TypeError("pick: keys debe ser un array");
  }
