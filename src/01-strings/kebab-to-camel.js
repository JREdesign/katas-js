export function kebabToCamel(input) {
  if (typeof input !== "string") {
    throw new TypeError("kebabToCamel: input debe ser un string");
  }
