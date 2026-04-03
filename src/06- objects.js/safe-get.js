export function safeGet(obj, key, defaultValue = undefined) {
  if (obj === null || typeof obj !== "object") {
    return defaultValue;
  }
 if (typeof key !== "string") {
    throw new TypeError("safeGet: key debe ser un string");
  }
  return key in obj ? obj[key] : defaultValue;
}
