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
