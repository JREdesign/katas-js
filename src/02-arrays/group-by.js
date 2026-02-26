export function groupBy(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError("groupBy: arr debe ser un array");
  }
  if (typeof fn !== "function") {
    throw new TypeError("groupBy: fn debe ser función");
  }

  return arr.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}
