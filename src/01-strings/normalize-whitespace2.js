export function normalizeWhitespace(input) {
  if (typeof input !== "string") {
    throw new TypeError(
      "normalizeWhitespace: input debe ser un string"
    );
  }
