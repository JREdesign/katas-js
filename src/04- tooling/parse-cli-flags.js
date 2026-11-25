/**
 * Extrae opciones booleanas (--watch) y opciones con valor (--mode=dev).
 * Ignora argumentos posicionales. La última opción repetida prevalece.
 */
export function parseCliFlags(args) {
  if (!Array.isArray(args) || !args.every((arg) => typeof arg === "string")) {
    throw new TypeError("parseCliFlags: se esperaba un array de cadenas");
  }

  const entries = [];

  for (const arg of args) {
    if (arg === "--") break;
    if (!arg.startsWith("--")) continue;

    const option = arg.slice(2);
    const separator = option.indexOf("=");
    const name = separator === -1 ? option : option.slice(0, separator);

    if (!name) continue;

    entries.push([name, separator === -1 ? true : option.slice(separator + 1)]);
  }

  return Object.fromEntries(entries);
}
