export async function withTimeout(promise, ms) {
  if (!(promise instanceof Promise)) {
    throw new TypeError("withTimeout: promise debe ser una Promise");
  }
  if (!Number.isFinite(ms) || ms < 0) {
    throw new TypeError("withTimeout: ms debe ser un número >= 0");
  }

  let timeoutId;

  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(
      () => reject(new Error("Tiempo de espera agotado")),
      ms,
    );
  });

  try {
    return await Promise.race([promise, timeout]);
  } finally {
    clearTimeout(timeoutId);
  }
}
