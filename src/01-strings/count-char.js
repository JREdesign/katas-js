export function countChar(input, char) {
  if (typeof input !== "string") {
    throw new TypeError("countChar: input debe ser un string");
  }
