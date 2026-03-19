export function padLeft(input, length, char = " ") {
  if (typeof input !== "string") {
    throw new TypeError("padLeft: input debe ser un string");
  }
