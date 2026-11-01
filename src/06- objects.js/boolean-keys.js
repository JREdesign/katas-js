export function booleanKeys(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new TypeError(
      "booleanKeys: obj debe ser un objeto simple"
    );
  }

  return Object.entries(obj)
    .filter(([, value]) => typeof value === "boolean")
    .map(([key]) => key);
}

export function booleanKeysByValue(obj, expectedValue) {
  if (typeof expectedValue !== "boolean") {
    throw new TypeError("booleanKeysByValue: expectedValue debe ser booleano");
  }

  return booleanKeys(obj).filter((key) => obj[key] === expectedValue);
}

export function booleanKeysSummary(obj) {
  const trueKeys = booleanKeysByValue(obj, true);
  const falseKeys = booleanKeysByValue(obj, false);

  return {
    trueKeys,
    falseKeys,
    total: trueKeys.length + falseKeys.length,
  };
}

export function toggleBooleanKeys(obj) {
  const keys = booleanKeys(obj);
  const result = { ...obj };

  for (const key of keys) {
    Object.defineProperty(result, key, {
      value: !obj[key],
      enumerable: true,
      writable: true,
      configurable: true,
    });
  }

  return result;
}
