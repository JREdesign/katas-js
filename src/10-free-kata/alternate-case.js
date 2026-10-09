export function alternateCase(text) {
  if (typeof text !== "string") {
    throw new TypeError("alternateCase: text debe ser una cadena");
  }

  let uppercase = true;

  return [...text].map((character) => {
    if (!/\p{L}/u.test(character)) return character;

    const result = uppercase
      ? character.toUpperCase()
      : character.toLowerCase();

    uppercase = !uppercase;
    return result;
  }).join("");
}
