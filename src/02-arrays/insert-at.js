export function insertAt(arr, index, value) {
  if (!Array.isArray(arr)) {
    throw new TypeError("insertAt: arr debe ser un array");
  }

  if (!Number.isInteger(index)) {
    throw new TypeError("insertAt: index debe ser un entero");
  }

  if (index < -arr.length || index > arr.length) {
    throw new RangeError("insertAt: index fuera de rango");
  }

  const position = index < 0 ? arr.length + index : index;
  return [...arr.slice(0, position), value, ...arr.slice(position)];
}
