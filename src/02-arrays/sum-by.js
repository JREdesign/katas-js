export function sumBy(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError("sumBy: arr debe ser un array");
  }
  if (typeof fn !== "function") {
    throw new TypeError("sumBy: fn debe ser función");
  }

  return arr.reduce((sum, item) => {
    const value = fn(item);

    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError("sumBy: fn debe devolver numbers válidos");
    }

    return sum + value;
  }, 0);
}
