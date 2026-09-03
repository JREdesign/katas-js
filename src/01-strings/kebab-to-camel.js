export function kebabToCamel(input) {
  if (typeof input !== "string") {
    throw new TypeError("kebabToCamel: input debe ser un string");
  }
  return input.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

  return input.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}
