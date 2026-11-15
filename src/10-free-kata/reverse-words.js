export function reverseWords(text) {
  if (typeof text !== "string") {
    throw new TypeError("reverseWords: se esperaba una cadena de texto");
  }

  const trimmed = text.trim();
  if (trimmed === "") return "";

  return trimmed.split(/\s+/).reverse().join(" ");
}

export function countWords(text) {
  if (typeof text !== "string") {
    throw new TypeError("countWords: se esperaba una cadena de texto");
  }

  const trimmed = text.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}
