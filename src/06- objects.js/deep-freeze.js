// KATAS-JS/src/06-objects/deep-freeze.js
export function deepFreeze(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("deepFreeze: obj debe ser un objeto");
  }

  Object.freeze(obj);
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  }

  return obj;
}
