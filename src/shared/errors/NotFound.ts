export class NotFound extends Error {
  public name = 'NotFound';
  private status = 404;
  private details: object;
  constructor(message: string, details: object = {}) {
    super(message);
    this.details = details
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details
    }
  }
}
