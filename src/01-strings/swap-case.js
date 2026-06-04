export function swapCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("swapCase: input debe ser un string");
  }
  return [...input]
    .map((char) => {
      const lower = char.toLowerCase();
      const upper = char.toUpperCase();

      if (char === lower && char !== upper) return upper;
      if (char === upper && char !== lower) return lower;
      return char;
    })
    .join("");
}
