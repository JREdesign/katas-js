export function isPalindrome(input) {
  if (typeof input !== "string") {
    throw new TypeError("isPalindrome: input debe ser un string");
  }

  const normalized = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  let i = 0;
  let j = normalized.length - 1;

  while (i < j) {
    if (normalized[i] !== normalized[j]) return false;
    i += 1;
    j -= 1;
  }
  return true;
}
