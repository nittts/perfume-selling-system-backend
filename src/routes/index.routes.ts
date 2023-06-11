import { Request, Response } from "express";
import { Router } from "express";

import storageRouter from "./storage/storage.routes";
import authRouter from "./auth/auth.routes";
import clientRouter from "./clients/clients.routes";

const indexRouter = Router();

indexRouter.use("/auth", authRouter);

indexRouter.use("/storage", storageRouter);

indexRouter.use("/clients", clientRouter);

indexRouter.use("/reports", (req: Request, res: Response) => {
  res.send("Rota de manejar os relatórios");
});

indexRouter.use("/sales", (req: Request, res: Response) => {
  res.send("Rota de manejar as vendas");
});

indexRouter.use("/messages", (req: Request, res: Response) => {
  res.send("Rota de manejar o envio de mensagens aos clientes");
});

indexRouter.use("/history", (req: Request, res: Response) => {
  res.send("Rota de manejar o histórico de saidas e entradas");
});

indexRouter.use("/salesControl", (req: Request, res: Response) => {
  res.send("Rota de manejar o controle de vendas");
});

export default indexRouter;
