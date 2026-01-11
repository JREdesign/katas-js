export function debounce(fn, delay) {
  if (typeof fn !== "function") {
    throw new TypeError("debounce: fn debe ser una función");
  }
  if (!Number.isInteger(delay) || delay < 0) {
    throw new TypeError("debounce: delay debe ser un entero >= 0");
  }

  let timerId = null;

  return (...args) => {
    if (timerId !== null) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
