export function countVowels(input) {
  if (typeof input !== "string") {
    throw new TypeError("countVowels: input debe ser un string");
  }
