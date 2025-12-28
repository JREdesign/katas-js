export function chunkArray(arr, size) {
  if (!Array.isArray(arr)) {
    throw new TypeError("chunkArray: arr debe ser un array");
  }
  if (!Number.isInteger(size) || size <= 0) {
    throw new TypeError("chunkArray: size debe ser un entero > 0");
  }

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
