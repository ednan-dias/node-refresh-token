import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.json({
    status: "Error",
    message: error.message,
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
