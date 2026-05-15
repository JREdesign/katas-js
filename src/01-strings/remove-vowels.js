export function removeVowels(input) {
  if (typeof input !== "string") {
    throw new TypeError("removeVowels: input debe ser un string");
  }
