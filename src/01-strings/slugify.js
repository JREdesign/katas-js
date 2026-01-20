// KATAS-JS/src/01-strings/slugify.js
export function slugify(input) {
  if (typeof input !== "string") {
    throw new TypeError("slugify: input debe ser un string");
  }

  return input
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
