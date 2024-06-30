
import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import router from "./app/routes";
import { config } from "./app/config";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send(`server is running`);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(401).json({
    success: false,
    message: "API NOT FOUND",
  });
});

export default app;
