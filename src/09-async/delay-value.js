export function delayValue(value, ms) {
  if (!Number.isFinite(ms) || ms < 0) {
    throw new TypeError("delayValue: ms debe ser un número >= 0");
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}
