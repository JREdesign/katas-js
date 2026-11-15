export function reverseWords(text) {
  if (typeof text !== "string") {
    throw new TypeError("reverseWords: se esperaba una cadena de texto");
  }

  return text.trim().split(/\s+/).reverse().join(" ");
}
