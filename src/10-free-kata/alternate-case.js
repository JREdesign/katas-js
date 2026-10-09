export function alternateCase(text, startUppercase = true) {
  if (typeof text !== "string") {
    throw new TypeError("alternateCase: text debe ser una cadena");
  }

  if (typeof startUppercase !== "boolean") {
    throw new TypeError("alternateCase: startUppercase debe ser un booleano");
  }

  let uppercase = startUppercase;

  return [...text].map((character) => {
    if (!/\p{L}/u.test(character)) return character;

    const result = uppercase
      ? character.toUpperCase()
      : character.toLowerCase();

    uppercase = !uppercase;
    return result;
  }).join("");
}
