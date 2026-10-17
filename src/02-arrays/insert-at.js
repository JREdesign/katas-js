function insertionPosition(arr, index) {
  if (!Array.isArray(arr)) {
    throw new TypeError("insertAt: arr debe ser un array");
  }

  if (!Number.isInteger(index)) {
    throw new TypeError("insertAt: index debe ser un entero");
  }

  if (index < -arr.length || index > arr.length) {
    throw new RangeError("insertAt: index fuera de rango");
  }

  return index < 0 ? arr.length + index : index;
}

export function insertAt(arr, index, value) {
  const position = insertionPosition(arr, index);
  return [...arr.slice(0, position), value, ...arr.slice(position)];
}

export function insertManyAt(arr, index, values) {
  const position = insertionPosition(arr, index);

  if (!Array.isArray(values)) {
    throw new TypeError("insertManyAt: values debe ser un array");
  }

  return [...arr.slice(0, position), ...values, ...arr.slice(position)];
}
