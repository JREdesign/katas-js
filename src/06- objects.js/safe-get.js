export function safeGet(obj, key, defaultValue = undefined) {
  if (obj === null || typeof obj !== "object") {
    return defaultValue;
  }
