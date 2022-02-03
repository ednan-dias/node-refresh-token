import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCase/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCase/createUser/CreateUserController";
import { RefreshTokenUserController } from "./useCase/refreshTokenUser/RefreshTokenUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

routes.post("/users", createUserController.handle);
routes.post("/login", authenticateUserController.handle);
routes.post("/refresh_token", refreshTokenUserController.handle);

routes.get("/courses", ensureAuthenticated, (req, res) => {
  res.json([
    { id: 1, name: "NodeJS" },
    { id: 2, name: "ReactJS" },
    { id: 3, name: "React Native" },
    { id: 4, name: "Flutter" },
    { id: 5, name: "Elixir" },
  ]);
});

export { routes };
