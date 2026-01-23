// KATAS-JS/src/06-objects/deep-freeze.js
export function deepFreeze(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("deepFreeze: obj debe ser un objeto");
  }

  Object.freeze(obj);
