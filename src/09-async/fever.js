class HttpError extends Error {
  /**
   * @param {string} message
   * @param {number} status
   * @param {string} url
   */
  constructor(message, status, url) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.url = url;
  }
}
/**
 * Pausa la ejecución durante una cantidad determinada de milisegundos.
 *
 * @param {number} milliseconds
 * @param {AbortSignal} [signal]
 * @returns {Promise<void>}
 */
function sleep(milliseconds, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason ?? new Error("Operación cancelada"));
      return;
    }

    const timeoutId = setTimeout(resolve, milliseconds);

    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeoutId);
        reject(signal.reason ?? new Error("Operación cancelada"));
      },
      { once: true }
    );
  });
}
