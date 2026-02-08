export function zip(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new TypeError("zip: a y b deben ser arrays");
  }

  const len = Math.min(a.length, b.length);
  const out = [];
