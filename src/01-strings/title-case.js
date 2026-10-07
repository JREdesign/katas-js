export function titleCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("titleCase: input debe ser un string");
  }

  return input
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
