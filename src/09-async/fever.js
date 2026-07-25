class HttpError extends Error {
  constructor(message, status, url) {
    super(message);

    this.name = "HttpError";
    this.status = status;
    this.url = url;
  }
}
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


function sleep(milliseconds, signal) {
  return new Promise((resolve, reject) => {
    const cancellationError = () =>
      signal?.reason ?? new Error("Operación cancelada");

        if (signal?.aborted) {
      reject(cancellationError());
      return;
    }

function sleep(milliseconds, signal) {
  return new Promise((resolve, reject) => {
    const cancellationError = () =>
      signal?.reason ?? new Error("Operación cancelada");

        if (signal?.aborted) {
      reject(cancellationError());
      return;
    }

function sleep(milliseconds, signal) {
  return new Promise((resolve, reject) => {
    const cancellationError = () =>
      signal?.reason ?? new Error("Operación cancelada");

    if (signal?.aborted) {
      reject(cancellationError());
      return;
    }
    };
  });
}
