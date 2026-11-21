export function countUppercase(text) {
  if (typeof text !== "string") {
    throw new TypeError("countUppercase: se esperaba una cadena de texto");
  }

  return [...text].filter((character) =>
    character.toLocaleUpperCase() === character &&
    character.toLocaleLowerCase() !== character
  ).length;
}

export function extractUppercase(text) {
  if (typeof text !== "string") {
    throw new TypeError("extractUppercase: se esperaba una cadena de texto");
  }

  return [...text].filter((character) =>
    character.toLocaleUpperCase() === character &&
    character.toLocaleLowerCase() !== character
  ).join("");
}

export function hasUppercase(text) {
  return countUppercase(text) > 0;
}
