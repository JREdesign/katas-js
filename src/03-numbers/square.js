export function square(n) {
  if (typeof n !== "number") {
    throw new TypeError("square: n debe ser de tipo number");
  }

  if (!Number.isFinite(n)) {
    throw new RangeError("square: n debe ser un número finito");
  }

  return n ** 2;
}
