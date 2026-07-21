class HttpError extends Error {
  /**
   * Crea un error relacionado con una petición HTTP.
   *
   * @param {string} message Mensaje descriptivo del error.
   * @param {number} status Código de estado HTTP.
   * @param {string} url URL en la que ocurrió el error.
   */
  constructor(message, status, url) {
    super(message);

    this.name = "HttpError";
    this.status = status;
    this.url = url;
  }
}

/**
 * Espera una cantidad determinada de milisegundos.
 * La espera puede cancelarse mediante un AbortSignal.
 *
 * @param {number} milliseconds Tiempo de espera en milisegundos.
 * @param {AbortSignal} [signal] Señal opcional de cancelación.
 * @returns {Promise<void>}
 */

function sleep(milliseconds, signal) {
  return new Promise((resolve, reject) => {
    const cancellationError = () =>
      signal?.reason ?? new Error("Operación cancelada");

    if (signal?.aborted) {
      reject(cancellationError());
      return;
    }

    const handleAbort = () => {
      clearTimeout(timeoutId);
      reject(cancellationError());
    };

    const timeoutId = setTimeout(() => {
      signal?.removeEventListener("abort", handleAbort);
      resolve();
    }, milliseconds);

    signal?.addEventListener("abort", handleAbort, { once: true });
  });
}

class HttpError extends Error {
  /**
   * Crea un error relacionado con una petición HTTP.
   *
   * @param {string} message Mensaje descriptivo del error.
   * @param {number} status Código de estado HTTP.
   * @param {string} url URL en la que ocurrió el error.
   */
