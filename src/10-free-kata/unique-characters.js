export function uniqueCharacters(text) {
  if (typeof text !== "string") {
    throw new TypeError("uniqueCharacters: text debe ser una cadena");
  }

  return [...new Set(text)];
}
