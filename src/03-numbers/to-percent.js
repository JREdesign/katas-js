export function toPercent(value, decimals = 0) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError("toPercent: value debe ser un number válido");
  }
  if (!Number.isInteger(decimals) || decimals < 0) {
    throw new TypeError("toPercent: decimals debe ser entero >= 0");
  }

  const factor = 10 ** decimals;
  return Math.round(value * 100 * factor) / factor;
}
