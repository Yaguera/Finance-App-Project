import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { PostgresCreateUserRepository } from "../repositories/postgres/create-user.js";

export class CreateUserUseCase {
  async execute(createUserParams) {
    // TODO: verify if the user email is already in use

    // generate user ID
    const userId = uuidv4();

    // encrypt password
    const hashedPassword = await bcrypt.hash(createUserParams.password, 10);

    // insert the user in the database
    const user = {
      ...createUserParams,
      id: userId,
      password: hashedPassword,
    };

    // call repository
    const postgresCreateUserRepository = new PostgresCreateUserRepository();
    const createdUser = await postgresCreateUserRepository.execute(user);
    return createdUser;
  }
}
