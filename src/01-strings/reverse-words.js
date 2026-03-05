export function reverseWords(input) {
  if (typeof input !== "string") {
    throw new TypeError("reverseWords: input debe ser un string");
  }

  return input
    .trim()
    .split(/\s+/)
    .reverse()
    .join(" ");
}
