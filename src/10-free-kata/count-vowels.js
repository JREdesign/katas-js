const VOWELS = new Set(["a", "e", "i", "o", "u"]);

export function countVowels(text) {
  if (typeof text !== "string") {
    throw new TypeError("countVowels: se esperaba una cadena de texto");
  }

  return [...text.toLowerCase()].filter((letter) => VOWELS.has(letter)).length;
}

export function extractVowels(text) {
  if (typeof text !== "string") {
    throw new TypeError("extractVowels: se esperaba una cadena de texto");
  }

  return [...text].filter((letter) => VOWELS.has(letter.toLowerCase()));
}
