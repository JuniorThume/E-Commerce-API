export class BadRequest extends Error {
  public name = "BadRequest";
  private status = 400;
  private details: object;
  constructor(name: string, message: string, details: object = {}) {
    super(message);
    this.name = name;
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
