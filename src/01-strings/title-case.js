export function titleCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("titleCase: input debe ser un string");
  }
