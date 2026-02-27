export async function retry(fn, attempts) {
  if (typeof fn !== "function") {
    throw new TypeError("retry: fn debe ser función");
  }
  if (!Number.isInteger(attempts) || attempts <= 0) {
    throw new TypeError("retry: attempts debe ser entero > 0");
  }

  let lastError;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError;
}
