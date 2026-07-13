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
