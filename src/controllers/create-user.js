import { badRequest, created, serverError } from "./helpers.js";
import { CreateUserUseCase } from "../use-cases/create-user.js";
import validator from "validator";
import { EmailAlreadyInUseError } from "../erros/user.js";

export class CreateUserController {
  async execute(httpRequest) {
    try {
      const params = httpRequest.body;
      // validate the requisition (required fields, password size and email)
      const requiredFields = ["first_name", "last_name", "email", "password"];

      for (const field of requiredFields) {
        if (!params[field] || params[field].trim().length === 0) {
          return badRequest({
            message: `Missing param: ${field}`,
          });
        }
      }

      if (params.password.length < 6) {
        return badRequest({
          message: "Password must be at least 6 characteres",
        });
      }

      if (!/[A-Z]/.test(params.password)) {
        return badRequest({
          message: "Password must contain at least one uppercase letter",
        });
      }

      if (!/[a-z]/.test(params.password)) {
        return badRequest({
          message: "Password must contain at least one lowercase letter",
        });
      }

      if (!/[0-9]/.test(params.password)) {
        return badRequest({
          message: "Password must contain at least one number",
        });
      }

      if (!/[!@#$%^&*(),.?":{}|<>]/.test(params.password)) {
        return badRequest({
          message: "Password must contain at least one special character",
        });
      }

      //   validate email
      const emailIsValid = validator.isEmail(params.email);
      if (!emailIsValid) {
        return badRequest({
          message: "Invalide e-mai. Please provide a valide one.",
        });
      }

      // call UseCase
      const createUserUseCase = new CreateUserUseCase();

      const createdUser = await createUserUseCase.execute(params);

      // return the answer to the user (status code)
      return created(createdUser);
    } catch (error) {
      if (error instanceof EmailAlreadyInUseError) {
        return badRequest({ message: error.message });
      }
      console.error(error);
      return serverError();
    }
  }
}
