export function countWords(input) {
  if (typeof input !== "string") {
    throw new TypeError("countWords: input debe ser un string");
  }
  const trimmed = input.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}
