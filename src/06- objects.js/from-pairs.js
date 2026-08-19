export function fromPairs(pairs) {
  if (!Array.isArray(pairs)) {
    throw new TypeError("fromPairs: pairs debe ser un array");
  }

  const result = {};

  for (const pair of pairs) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new TypeError(
        "fromPairs: cada elemento debe ser un array de dos posiciones"
      );
    }
