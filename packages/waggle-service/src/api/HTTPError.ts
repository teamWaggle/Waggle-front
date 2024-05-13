export class HTTPError extends Error {
  statusCode: number;
  detail?: string;
  code?: number;

  constructor(statusCode: number, message?: string, code?: number, detail?: string) {
    super(message);

    this.name = "HTTPError";
    this.statusCode = statusCode;
    this.code = code;
    this.detail = detail;

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}
