export function capitalize(input) {
  if (typeof input !== "string") {
    throw new TypeError("capitalize: input debe ser un string");
  }
  if (input.length === 0) return "";
  return input[0].toUpperCase() + input.slice(1);
}
