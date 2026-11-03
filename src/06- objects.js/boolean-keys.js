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

export function countBooleanValues(obj) {
  const { trueKeys, falseKeys } = booleanKeysSummary(obj);

  return {
    trueCount: trueKeys.length,
    falseCount: falseKeys.length,
  };
}

export function pickBooleanProperties(obj) {
  return Object.fromEntries(
    booleanKeys(obj).map((key) => [key, obj[key]])
  );
}

export function setBooleanKey(obj, key, value) {
  booleanKeys(obj);

  if (typeof key !== "string" || !Object.prototype.hasOwnProperty.call(obj, key) ||
      typeof obj[key] !== "boolean") {
    throw new TypeError("setBooleanKey: key debe ser una clave booleana propia");
  }
  if (typeof value !== "boolean") {
    throw new TypeError("setBooleanKey: value debe ser booleano");
  }

  const result = { ...obj };
  Object.defineProperty(result, key, {
    value,
    enumerable: true,
    writable: true,
    configurable: true,
  });
  return result;
}

export function hasBooleanKeys(obj) {
  return booleanKeys(obj).length > 0;
}
