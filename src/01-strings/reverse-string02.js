export function reverseString(input) {
  if (typeof input !== "string") {
    throw new TypeError("reverseString: input debe ser un string");
  }
  return input.split("").reverse().join("");
}
