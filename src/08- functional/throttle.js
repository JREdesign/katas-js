// KATAS-JS/src/08-functional/throttle.js
export function throttle(fn, interval) {
  if (typeof fn !== "function") {
    throw new TypeError("throttle: fn debe ser una función");
  }
  if (!Number.isInteger(interval) || interval < 0) {
    throw new TypeError("throttle: interval debe ser un entero >= 0");
  }

  let lastTime = 0;

  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn(...args);
    }
  };
}
