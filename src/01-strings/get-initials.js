export function getInitials(input) {
  if (typeof input !== "string") {
    throw new TypeError("getInitials: input debe ser un string");
  }
  const words = input.trim().split(/\s+/).filter(Boolean);

  return words
    .map((word) => word[0].toUpperCase())
    .join("");
}
