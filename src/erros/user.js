export class EmailAlreadyInUseError extends Error {
  constructor(email) {
    super(`the email'${email}' is already in use.`);
    this.name = "EmailAlreadyInUseError";
  }
}
