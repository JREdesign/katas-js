/**
 * Intercambia dos posiciones de un array sin modificar el original.
 * Los índices deben ser enteros válidos dentro del array.
 */
export function swapItems(items, firstIndex, secondIndex) {
  if (!Array.isArray(items)) {
    throw new TypeError("swapItems: se esperaba un array");
  }

  if (
    !Number.isInteger(firstIndex) ||
    !Number.isInteger(secondIndex) ||
    firstIndex < 0 ||
    secondIndex < 0 ||
    firstIndex >= items.length ||
    secondIndex >= items.length
  ) {
    throw new RangeError("swapItems: los índices deben estar dentro del array");
  }

  const result = [...items];
  [result[firstIndex], result[secondIndex]] = [
    result[secondIndex],
    result[firstIndex],
  ];
  return result;
}

/**
 * Intercambia un elemento con el siguiente, sin modificar el array original.
 */

export function swapAdjacent(items, index) {
  if (!Array.isArray(items)) {
    throw new TypeError("swapAdjacent: se esperaba un array");
  }

  if (!Number.isInteger(index) || index < 0 || index >= items.length - 1) {
    throw new RangeError("swapAdjacent: el índice debe tener un elemento siguiente");
  }

  return swapItems(items, index, index + 1);
}
