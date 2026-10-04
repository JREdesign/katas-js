export function rotateArray(items, steps = 1) {
  if (!Array.isArray(items)) {
    throw new TypeError("rotateArray: items debe ser un array");
  }

  if (!Number.isInteger(steps)) {
    throw new TypeError("rotateArray: steps debe ser un entero");
  }

  if (items.length === 0) return [];

  const offset = ((steps % items.length) + items.length) % items.length;

  return [...items.slice(-offset), ...items.slice(0, -offset)];
}
