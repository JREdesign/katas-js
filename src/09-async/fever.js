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

