export function moveItem(arr, fromIndex, toIndex) {
  if (!Array.isArray(arr)) {
    throw new TypeError("moveItem: arr debe ser un array");
  }
  
  if (!Number.isInteger(fromIndex) || !Number.isInteger(toIndex)) {
    throw new TypeError(
      "moveItem: fromIndex y toIndex deben ser enteros"
    );
  
  if (
    fromIndex < 0 ||
    fromIndex >= arr.length ||
    toIndex < 0 ||
    toIndex >= arr.length
  ) {
    throw new RangeError("moveItem: índice fuera de rango");
  }
  
  const result = [...arr];
  const [item] = result.splice(fromIndex, 1);

  result.splice(toIndex, 0, item);

  return result;
}
