export function startsWithCI(input, prefix) {
  if (typeof input !== "string" || typeof prefix !== "string") {
    throw new TypeError("startsWithCI: input y prefix deben ser strings");
  }
  return input.toLowerCase().startsWith(prefix.toLowerCase());
}
