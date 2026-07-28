export function getInitials(input) {
  if (typeof input !== "string") {
    throw new TypeError("getInitials: input debe ser un string");
  }
