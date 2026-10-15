export function rangesOverlap(first, second) {
  for (const range of [first, second]) {
    if (
      !Array.isArray(range) ||
      range.length !== 2 ||
      !range.every(Number.isFinite) ||
      range[0] > range[1]
    ) {
      throw new TypeError("rangesOverlap: se esperaban intervalos [inicio, fin] válidos");
    }
  }

  return first[0] <= second[1] && second[0] <= first[1];
}

export function rangeIntersection(first, second) {
  if (!rangesOverlap(first, second)) return null;

  return [
    Math.max(first[0], second[0]),
    Math.min(first[1], second[1]),
  ];
}
