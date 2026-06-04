export function swapCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("swapCase: input debe ser un string");
  }
