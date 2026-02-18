export function repeatString(input, times) {
  if (typeof input !== "string") {
    throw new TypeError("repeatString: input debe ser un string");
  }
  if (!Number.isInteger(times) || times < 0) {
    throw new TypeError("repeatString: times debe ser un entero >= 0");
  }
  return input.repeat(times);
}
