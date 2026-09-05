export function groupConsecutive(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("groupConsecutive: numbers debe ser un array");
  }
