export function countWords(text) {
  if (typeof text !== "string") {
    throw new TypeError("countWords: text debe ser una cadena");
  }

  const words = text.trim().match(/\S+/gu);
  return words?.length ?? 0;
}
