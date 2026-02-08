export function zip(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new TypeError("zip: a y b deben ser arrays");
  }

  const len = Math.min(a.length, b.length);
  const out = [];

  for (let i = 0; i < len; i += 1) {
    out.push([a[i], b[i]]);
  }

  return out;
}
