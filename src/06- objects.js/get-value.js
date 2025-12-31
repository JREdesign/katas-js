export function getValue(obj, path, defaultValue = undefined) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("getValue: obj debe ser un objeto");
  }
  if (typeof path !== "string") {
    throw new TypeError("getValue: path debe ser un string");
  }

  if (path.trim() === "") return defaultValue;

  const parts = path.split(".").filter(Boolean);
  let current = obj;

  for (const key of parts) {
    if (current === null || typeof current !== "object") return defaultValue;
    if (!(key in current)) return defaultValue;
    current = current[key];
  }

  return current === undefined ? defaultValue : current;
}
