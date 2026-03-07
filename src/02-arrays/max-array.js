export function maxArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("maxArray: 'arr' debe ser un array");
  }

  if (arr.length === 0) {
    throw new RangeError("maxArray: el array no puede estar vacío");
  }

  const first = arr[0];

  if (typeof first !== "number" || Number.isNaN(first)) {
    throw new TypeError("maxArray: todos los elementos deben ser números válidos");
  }

  let max = first;

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];

    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError("maxArray: todos los elementos deben ser números válidos");
    }

    if (value > max) {
      max = value;
    }
  }

  return max;
}
