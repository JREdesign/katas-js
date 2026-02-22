export function hasOwn(obj, key) {
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    throw new TypeError("hasOwn: obj debe ser un objeto");
  }
  if (typeof key !== "string") {
    throw new TypeError("hasOwn: key debe ser un string");
  }
  return Object.prototype.hasOwnProperty.call(obj, key);
}
