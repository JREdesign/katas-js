export function once(fn) {
  if (typeof fn !== "function") {
    throw new TypeError("once: fn debe ser función");
  }

  let called = false;
  let value;

  return (...args) => {
    if (!called) {
      called = true;
      value = fn(...args);
    }
    return value;
  };
}
