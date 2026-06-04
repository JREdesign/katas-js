export function swapCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("swapCase: input debe ser un string");
  }
  return [...input]
    .map((char) => {
      const lower = char.toLowerCase();
      const upper = char.toUpperCase();
