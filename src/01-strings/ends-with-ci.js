export function endsWithCI(input, suffix) {
  if (typeof input !== "string" || typeof suffix !== "string") {
    throw new TypeError("endsWithCI: input y suffix deben ser strings");
  }

  return input.toLowerCase().endsWith(suffix.toLowerCase());
}
