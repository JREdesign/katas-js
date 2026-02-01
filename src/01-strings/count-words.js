export function countWords(input) {
  if (typeof input !== "string") {
    throw new TypeError("countWords: input debe ser un string");
  }
  
