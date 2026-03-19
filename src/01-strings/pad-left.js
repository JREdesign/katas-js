export function padLeft(input, length, char = " ") {
  if (typeof input !== "string") {
    throw new TypeError("padLeft: input debe ser un string");
  }
if (!Number.isInteger(length) || length < 0) {
    throw new TypeError("padLeft: length debe ser un entero >= 0");
}
if (typeof char !== "string" || char.length === 0) {
    throw new TypeError("padLeft: char debe ser un string no vacío");
}
