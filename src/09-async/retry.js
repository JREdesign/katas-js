export async function retry(fn, attempts) {
  if (typeof fn !== "function") {
    throw new TypeError("retry: fn debe ser función");
  }
  if (!Number.isInteger(attempts) || attempts <= 0) {
    throw new TypeError("retry: attempts debe ser entero > 0");
  }

  let lastError = null;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}
