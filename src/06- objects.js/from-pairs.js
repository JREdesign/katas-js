export function fromPairs(pairs) {
  if (!Array.isArray(pairs)) {
    throw new TypeError("fromPairs: pairs debe ser un array");
  }

  const result = {};
