/**
 * Extrae opciones booleanas (--watch) y opciones con valor (--mode=dev).
 * Ignora argumentos posicionales. La última opción repetida prevalece.
 */
export function parseCliFlags(args) {
  if (!Array.isArray(args) || !Array.from(args).every((arg) => typeof arg === "string")) {
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

/**
 * Combina las opciones de línea de comandos con valores predeterminados.
 * Las opciones explícitas prevalecen, incluso si contienen un valor vacío.
 */
export function parseCliFlagsWithDefaults(args, defaults = {}) {
  if (defaults === null || typeof defaults !== "object" || Array.isArray(defaults)) {
    throw new TypeError("parseCliFlagsWithDefaults: se esperaba un objeto de valores predeterminados");
  }

  return { ...defaults, ...parseCliFlags(args) };
}

/**
 * Comprueba si una opción aparece explícitamente antes del separador --.
 */
export function hasCliFlag(args, name) {
  if (typeof name !== "string" || name.length === 0) {
    throw new TypeError("hasCliFlag: se esperaba un nombre de opción no vacío");
  }

  return Object.hasOwn(parseCliFlags(args), name);
}
