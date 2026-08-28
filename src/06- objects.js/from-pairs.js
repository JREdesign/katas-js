export function fromPairs(pairs) {
  if (!Array.isArray(pairs)) {
    throw new TypeError("fromPairs: donde pairs debe ser un array");
  }
  const result = {};

  for (const pair of pairs) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new TypeError(
        "fromPairs: donde cada elemento debe ser un array de dos posiciones"
      );
    }
    const [key, value] = pair;

    if (typeof key !== "string") {
      throw new TypeError(
        "fromPairs: donde cada clave debe ser un string"
      );
    }
    result[key] = value;
  }
  return result;
}
