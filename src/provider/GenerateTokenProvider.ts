import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "53cadaf3-691e-45c8-9873-bed5f239f189", {
      subject: userId,
      expiresIn: "20s",
    });

    return token;
  }
}

export { GenerateTokenProvider };
