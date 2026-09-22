export function absoluteDifference(a, b) {
  if (
    typeof a !== "number" ||
    Number.isNaN(a) ||
    typeof b !== "number" ||
    Number.isNaN(b)
 ) {
    throw new TypeError(
      "absoluteDifference: a y b deben ser numbers válidos"
    );
  }
