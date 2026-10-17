export function insertAt(arr, index, value) {
  if (!Array.isArray(arr)) {
    throw new TypeError("insertAt: arr debe ser un array");
  }

  if (!Number.isInteger(index)) {
    throw new TypeError("insertAt: index debe ser un entero");
  }

  if (index < 0 || index > arr.length) {
    throw new RangeError("insertAt: index fuera de rango");
  }

  return [...arr.slice(0, index), value, ...arr.slice(index)];
}
