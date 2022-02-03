import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface IUserRequest {
  name: string;
  password: string;
  username: string;
}

class CreateUserUseCase {
  // Verifica se o usuário existe

  async execute({ name, username, password }: IUserRequest) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    // Cadastra o usuário

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        username,
        password: passwordHash,
      },
    });

    return user;
  }
}

export { CreateUserUseCase };
