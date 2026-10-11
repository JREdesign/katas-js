export function countWords(text) {
  if (typeof text !== "string") {
    throw new TypeError("countWords: text debe ser una cadena");
  }

  const words = text.trim().match(/\S+/gu);
  return words?.length ?? 0;
}

export function wordFrequencies(text) {
  if (typeof text !== "string") {
    throw new TypeError("wordFrequencies: text debe ser una cadena");
  }

  const frequencies = {};

  for (const word of text.toLocaleLowerCase().match(/\S+/gu) ?? []) {
    frequencies[word] = (frequencies[word] ?? 0) + 1;
  }

  return frequencies;
}
