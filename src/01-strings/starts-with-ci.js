export function startsWithCI(input, prefix) {
  // Validación de tipos
  if (typeof input !== "string") {
    throw new TypeError("startsWithCI: input debe ser un string");
  }

  if (typeof prefix !== "string") {
    throw new TypeError("startsWithCI: prefix debe ser un string");
  }

  // Convertir ambos valores a minúsculas
  const normalizedInput = input.toLowerCase();
  const normalizedPrefix = prefix.toLowerCase();

  // Obtener la longitud del prefijo
  const prefixLength = normalizedPrefix.length;

  // Extraer la parte inicial del string
  const inputStart = normalizedInput.slice(0, prefixLength);

  // Comparar manualmente
  if (inputStart === normalizedPrefix) {
    return true;
  } else {
    return false;
  }
}
