export function countChar(input, char) {
  if (typeof input !== "string") {
    throw new TypeError("countChar: input debe ser un string");
  }
  if (typeof char !== "string" || char.length !== 1) {
    throw new TypeError("countChar: char debe ser un string de longitud 1");
  }
