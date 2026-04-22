export function countChar(input, char) {
  if (typeof input !== "string") {
    throw new TypeError("countChar: input debe ser un string");
  }
  if (typeof char !== "string" || char.length !== 1) {
    throw new TypeError("countChar: char debe ser un string de longitud 1");
  }
  let count = 0;
  for (const current of input) {
    if (current === char) count += 1;
  }
